import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Instances from "./pages/Instances";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-white shadow p-4">
          <h1 className="text-2xl font-bold text-blue-600 text-center">
            Courses Management System
          </h1>
        </header>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/instances" element={<Instances />} />
          </Routes>
        </main>
        <footer className="bg-white text-center py-4 border-t mt-10 text-sm text-gray-600">
          © 2025 ShivrajCodes | Internship Assignment
        </footer>
      </div>
    </Router>
  );
}

export default App;
