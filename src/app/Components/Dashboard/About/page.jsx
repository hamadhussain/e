
export default function Home() {
  return (
    <div className="container mx-auto p-4"> <main className="bg-whit rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold mb-4">Exam Management System</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 p-4 bg-gra-100 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-2">Upcoming Exams</h2>
            <ul>
              <li className="mb-2">Exam 1 - Date: 2024-07-09</li>
              <li className="mb-2">Exam 2 - Date: 2024-07-19</li>
              <li className="mb-2">Exam 3 - Date: 2024-07-29</li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 p-4 bg-gry-100 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-2">Recent Results</h2>
            <ul>
              <li className="mb-2">Section A - Score: 85%</li>
              <li className="mb-2">Section B - Score: 92%</li>
              <li className="mb-2">Section C - Score: 78%</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
