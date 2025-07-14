import React, { useState } from "react";

const INSTRUCTIONS = [
  "Solve the puzzle to be the first table dismissed for food.",
  "Play together on one device with one entry per table.",
  "The winner is the table with the fewest incorrect guesses.",
  "Ties are broken by time taken to complete the puzzle."
];

export default function Onboarding({ onComplete, onTableNumber, onTeamName, error }) {
  const [step, setStep] = useState(0); // 0: instructions, 1: table, 2: team
  const [tableNumber, setTableNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [localError, setLocalError] = useState("");

  // Step 0: Instructions
  if (step === 0) {
    return (
      <div className="onboarding-modal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <h1 style={{ textAlign: 'center', marginBottom: 24 }}>How to Play</h1>
        <ul style={{
          textAlign: 'left',
          listStyle: 'disc',
          margin: 0,
          paddingLeft: 24,
          marginBottom: 32,
          maxWidth: 400,
          width: '100%'
        }}>
          {INSTRUCTIONS.map((line, i) => (
            <li key={i} style={{ fontSize: 18, margin: '16px 0', lineHeight: 1.5 }}>{line}</li>
          ))}
        </ul>
        <button
          style={{
            padding: '12px 32px',
            fontSize: 18,
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            marginTop: 16
          }}
          onClick={() => setStep(1)}
        >
          Continue
        </button>
      </div>
    );
  }

  // Step 1: Table Number
  if (step === 1) {
    return (
      <div className="onboarding-modal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24, fontWeight: 700 }}>Enter Your Table Number</h2>
        <input
          type="number"
          min="1"
          value={tableNumber}
          onChange={e => setTableNumber(e.target.value.replace(/[^0-9]/g, ""))}
          placeholder="Table Number"
          style={{
            padding: '12px 20px',
            fontSize: 18,
            border: '2px solid #2563eb',
            borderRadius: 8,
            outline: 'none',
            marginBottom: 20,
            width: 220,
            textAlign: 'center',
            boxShadow: '0 1px 6px rgba(0,0,0,0.04)'
          }}
        />
        <button
          style={{
            padding: '12px 32px',
            fontSize: 18,
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            marginTop: 8
          }}
          onClick={async () => {
            setLocalError("");
            if (!tableNumber) {
              setLocalError("Please enter a table number.");
              return;
            }
            const ok = await onTableNumber(tableNumber);
            if (ok === true) {
              setStep(2);
            } else if (typeof ok === 'string') {
              setLocalError(ok);
            } else {
              setLocalError("That table number is already submitted by another device, work to solve the puzzle with your table.");
            }
          }}
        >Continue</button>
        <div style={{color:'red',marginTop:8}}>{localError || error}</div>
      </div>
    );
  }

  // Step 2: Team Name
  return (
    <div className="onboarding-modal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 18, fontWeight: 700 }}>Team Name</h2>
      <p style={{ textAlign: 'center', marginBottom: 18 }}>Choose a fun team name for your table to put on the leaderboard.</p>
      <input
        type="text"
        value={teamName}
        onChange={e => setTeamName(e.target.value)}
        placeholder="Team Name"
        style={{
          padding: '12px 20px',
          fontSize: 18,
          border: '2px solid #2563eb',
          borderRadius: 8,
          outline: 'none',
          marginBottom: 20,
          width: 260,
          textAlign: 'center',
          boxShadow: '0 1px 6px rgba(0,0,0,0.04)'
        }}
      />
      <button
        style={{
          padding: '12px 32px',
          fontSize: 18,
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          marginTop: 8
        }}
        onClick={async () => {
          setLocalError("");
          if (!teamName.trim()) {
            setLocalError("Please enter a team name.");
            return;
          }
          const ok = await onTeamName(teamName.trim(), tableNumber);
          if (ok === true) {
            onComplete();
          } else if (typeof ok === 'string') {
            setLocalError(ok);
          } else {
            setLocalError("That table number or team name is already submitted by another device, work to solve the puzzle with your table.");
          }
        }}
      >Start Game</button>
      <div style={{color:'red',marginTop:8}}>{localError}</div>
    </div>
  );
}
