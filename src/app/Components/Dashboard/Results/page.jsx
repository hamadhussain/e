"use client";
import { useState } from "react";

export default function Home() {
  const [examResults, setExamResults] = useState([]);

  // Fetch exam results from the database (replace with your own logic)
  async function fetchExamResults() {
    try {
      const response = await fetch("/api/exam-results");
      const data = await response.json();
      setExamResults(data);
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 uppercase">Exam Results</h1>
      <p>Total Marks is 50</p>
      <br />
      <button
        onClick={fetchExamResults}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Check Results
      </button>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Student Name</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {examResults.map((result) => (
            <tr key={result.id}>
              <td className="border px-4 py-2">{result.studentName}</td>
              <td className="border px-4 py-2">{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
