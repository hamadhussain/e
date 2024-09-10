
"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [examResults, setExamResults] = useState([]);

  const fetchExamResults = async () => {
    try {
      const response = await fetch("/Api/Result/", {
        method: "GET",
      });
      const data = await response.json();
      
      // Assuming data.login is an array of objects like [{ email: 'example1@example.com', score: 80 }, ...]
      console.log(data.login); // Check the structure of data.login to ensure it matches expectations
      
      // Update examResults state with the fetched data
      setExamResults(data.login); // Assuming data.login is the array of exam results
    } catch (error) {
      console.log("Error fetching exam results:", error); // Log error details
    }
  };

  useEffect(() => {
    fetchExamResults();
  }, []);

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
            <th className="px-4 py-2">Student Email</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {examResults.length > 0 ? (
            examResults.map((result, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{result.email}</td>
                <td className="border px-4 py-2">{result.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="border px-4 py-2 text-center">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
