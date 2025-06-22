import { useState, useEffect } from "react";
import { fetchCourses, createInstance } from "../api/api";

function InstanceForm({ onInstanceCreated }) {
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [courseId, setCourseId] = useState("");
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    fetchCourses().then(setAvailableCourses);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createInstance({ year, semester, courseId });
      onInstanceCreated();
      setYear("");
      setSemester("");
      setCourseId("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 max-w-md">
      <h3 className="text-lg font-semibold">Create Course Instance</h3>
      <input
        type="number"
        className="w-full border rounded px-3 py-2"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year (e.g. 2025)"
        required
      />
      <input
        type="number"
        className="w-full border rounded px-3 py-2"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
        placeholder="Semester (1 or 2)"
        required
      />
      <select
        className="w-full border rounded px-3 py-2"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
        required
      >
        <option value="">Select Course</option>
        {availableCourses.map((c) => (
          <option key={c.courseId} value={c.courseId}>
            {c.courseId} - {c.title}
          </option>
        ))}
      </select>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Create Instance
      </button>
    </form>
  );
}

export default InstanceForm;
