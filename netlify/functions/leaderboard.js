
import { getStore, connectLambda } from '@netlify/blobs';
const BLOB_KEY = 'leaderboard-store';
const LEADERBOARD = 'leaderboard';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function handler(event, context) {
  connectLambda(event);
  
  const store = getStore(BLOB_KEY);
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: 'OK',
    };
  }
  if (event.httpMethod === 'GET') {
    let leaderboard = [];
    try {
      const blob = await store.get(LEADERBOARD);
      if (blob) {
        leaderboard = JSON.parse(blob);
      }
    } catch {}
    leaderboard.sort((a, b) => {
      if (a.mistakes !== b.mistakes) return a.mistakes - b.mistakes;
      if (typeof a.timeUsed === 'number' && typeof b.timeUsed === 'number') {
        return a.timeUsed - b.timeUsed;
      }
      return a.timestamp - b.timestamp;
    });
    return {
      statusCode: 200,
      body: JSON.stringify(leaderboard),
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
    };
  }

  if (event.httpMethod === 'POST') {
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (e) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid JSON' }),
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
      };
    }
    const { name, mistakes, timeUsed } = body;
    if (!name || typeof mistakes !== 'number' || typeof timeUsed !== 'number') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name, mistakes, and timeUsed are required.' }),
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
      };
    }
    // Read, update, and write leaderboard using Netlify Blobs Store
    let leaderboard = [];
    try {
      const blob = await store.get(LEADERBOARD);
      if (blob) {
        leaderboard = JSON.parse(blob);
      }
    } catch {}
    const nameExists = leaderboard.some(entry => entry.name.trim().toLowerCase() === name.trim().toLowerCase());
    if (nameExists) {
      return {
        statusCode: 409,
        body: JSON.stringify({ error: 'A score for this name already exists.' }),
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
      };
    }
    const newEntry = { name, mistakes, timeUsed, timestamp: Date.now() };
    leaderboard.push(newEntry);

    // Basic retry mechanism for concurrent writes
    const MAX_RETRIES = 3;
    let success = false;
    let retries = 0;
    while (!success && retries < MAX_RETRIES) {
      await store.set(LEADERBOARD, JSON.stringify(leaderboard));
      // Re-read and check if our entry is present
      let verifyLeaderboard = [];
      try {
        const verifyBlob = await store.get(LEADERBOARD);
        if (verifyBlob) {
          verifyLeaderboard = JSON.parse(verifyBlob);
        }
      } catch {}
      const found = verifyLeaderboard.some(entry => entry.name.trim().toLowerCase() === name.trim().toLowerCase());
      if (found) {
        success = true;
      } else {
        // Re-read, re-apply our entry, and try again
        leaderboard = verifyLeaderboard;
        leaderboard.push(newEntry);
        retries++;
      }
    }
    if (!success) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to save entry after several attempts. Please try again.' }),
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method Not Allowed' }),
    headers: { 'Content-Type': 'application/json' }
  };
}
