import { useEffect, useState } from "react";
import api from "../api";

function CourseForm({ onCourseCreated }) {
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [description, setDescription] = useState("");
  const [prerequisites, setPrerequisites] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    api.get("/courses").then((res) => setAvailableCourses(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prereqObjects = prerequisites.map((id) => ({ courseId: id }));
    const newCourse = { title, courseId, description, prerequisites: prereqObjects };

    try {
      await api.post("/courses", newCourse);
      onCourseCreated();
      setTitle(""); setCourseId(""); setDescription(""); setPrerequisites([]);
    } catch (err) {
      alert(err.response?.data || "Error creating course");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Course</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" required />
      <input value={courseId} onChange={(e) => setCourseId(e.target.value)} placeholder="Course ID" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <select multiple value={prerequisites} onChange={(e) => setPrerequisites(Array.from(e.target.selectedOptions, opt => opt.value))}>
        {availableCourses.map((c) => (
          <option key={c.courseId} value={c.courseId}>
            {c.courseId} - {c.title}
          </option>
        ))}
      </select>
      <button type="submit">Add Course</button>
    </form>
  );
}

export default CourseForm;
