const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'leaderboard.json');

function readLeaderboard() {
  if (!fs.existsSync(DATA_FILE)) return [];
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function writeLeaderboard(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async function(event, context) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: 'OK',
    };
  }
  if (event.httpMethod === 'GET') {
    const leaderboard = readLeaderboard();
    leaderboard.sort((a, b) => {
      if (a.mistakes !== b.mistakes) return a.mistakes - b.mistakes;
      // tiebreaker: less timeUsed is better
      if (typeof a.timeUsed === 'number' && typeof b.timeUsed === 'number') {
        return a.timeUsed - b.timeUsed;
      }
      // fallback: earliest timestamp
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
    const leaderboard = readLeaderboard();
    const nameExists = leaderboard.some(entry => entry.name.trim().toLowerCase() === name.trim().toLowerCase());
    if (nameExists) {
      return {
        statusCode: 409,
        body: JSON.stringify({ error: 'A score for this name already exists.' }),
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS }
      };
    }
    leaderboard.push({ name, mistakes, timeUsed, timestamp: Date.now() });
    writeLeaderboard(leaderboard);
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
};
