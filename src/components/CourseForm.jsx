import { useState, useEffect } from "react";
import { fetchCourses, createCourse } from "../api";

function CourseForm({ onCourseCreated }) {
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [description, setDescription] = useState("");
  const [prerequisites, setPrerequisites] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    fetchCourses().then(setAvailableCourses);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCourse({ title, courseId, description, prerequisites });
      onCourseCreated();
      setTitle("");
      setCourseId("");
      setDescription("");
      setPrerequisites([]);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 max-w-md">
      <h3 className="text-lg font-semibold">Create Course</h3>
      <input className="w-full border rounded px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" required />
      <input className="w-full border rounded px-3 py-2" value={courseId} onChange={(e) => setCourseId(e.target.value)} placeholder="Course ID" required />
      <input className="w-full border rounded px-3 py-2" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <select multiple className="w-full border rounded px-3 py-2 h-32" value={prerequisites} onChange={(e) => setPrerequisites(Array.from(e.target.selectedOptions, opt => opt.value))}>
        {availableCourses.map((c) => (
          <option key={c.courseId} value={c.courseId}>
            {c.courseId} - {c.title}
          </option>
        ))}
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Course
      </button>
    </form>
  );
}

export default CourseForm;
