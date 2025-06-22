import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Courses Manager</h1>
      <div className="space-y-4">
        <Link
          to="/courses"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Manage Courses
        </Link>
        <br />
        <Link
          to="/instances"
          className="inline-block px-6 py-3 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          Manage Course Instances
        </Link>
      </div>
    </div>
  );
}

export default Home;
