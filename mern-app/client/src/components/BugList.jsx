import React, { useEffect, useState } from 'react';

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/bugs');
        const data = await res.json();
        setBugs(data);
      } catch (err) {
        console.error('Error fetching bugs:', err);
      }
    };

    fetchBugs();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bug List</h2>
      <ul className="space-y-2">
        {bugs.map((bug) => (
          <li key={bug.id} className="border p-2 rounded shadow">
            <strong>{bug.title}</strong> - Severity: {bug.severity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BugList;
