import React from "react";

function Leaderboard({ onBack }) {
  const [scores, setScores] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch("/.netlify/functions/leaderboard")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch leaderboard");
        return res.json();
      })
      .then((data) => {
        setScores(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function formatTime(ms) {
    if (typeof ms !== 'number' || isNaN(ms)) return "-";
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m:${seconds.toString().padStart(2, '0')}s`;
  }

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Leaderboard</h2>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onBack}
      >
        Back to Game
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">Table Name</th>
              <th className="border-b p-2 text-left">Mistakes</th>
              <th className="border-b p-2 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((entry, idx) => {
              let medal = "";
              if (idx === 0) medal = "🥇 ";
              else if (idx === 1) medal = "🥈 ";
              else if (idx === 2) medal = "🥉 ";
              return (
                <tr key={entry.name + entry.mistakes + idx}>
                  <td className="border-b p-2">{medal}{entry.name}</td>
                  <td className="border-b p-2">{entry.mistakes}</td>
                  <td className="border-b p-2">{formatTime(entry.timeUsed)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <p className="mt-6 text-center text-gray-600 text-sm">
        <strong>How it works:</strong> Tables are ranked by the fewest mistakes. If tables are tied, the table that finished faster is ranked higher.
      </p>
    </div>
  );
}

export default Leaderboard;
