import { useEffect, useState } from "react";
import api from "../api";

function InstanceForm({ onInstanceCreated }) {
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [courseId, setCourseId] = useState("");
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    api.get("/courses").then((res) => setAvailableCourses(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/instances", { year, semester, courseId });
      onInstanceCreated();
      setYear(""); setSemester(""); setCourseId("");
    } catch (err) {
      alert(err.response?.data || "Error creating instance");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Course Instance</h3>
      <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year (e.g. 2025)" required />
      <input type="number" value={semester} onChange={(e) => setSemester(e.target.value)} placeholder="Semester (1 or 2)" required />
      <select value={courseId} onChange={(e) => setCourseId(e.target.value)} required>
        <option value="">Select Course</option>
        {availableCourses.map((c) => (
          <option key={c.courseId} value={c.courseId}>
            {c.courseId} - {c.title}
          </option>
        ))}
      </select>
      <button type="submit">Create Instance</button>
    </form>
  );
}

export default InstanceForm;
