import { useEffect, useState } from "react";
import api from "../api";

function CourseList() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    api.get("/courses").then((res) => setCourses(res.data));
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/courses/${id}`);
      fetchCourses();
    } catch (err) {
      alert(err.response?.data || "Cannot delete course");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h3>All Courses</h3>
      <ul>
        {courses.map((c) => (
          <li key={c.courseId}>
            <strong>{c.courseId}</strong>: {c.title}
            {c.prerequisites?.length > 0 && (
              <em> | Prereqs: {c.prerequisites.map((p) => p.courseId).join(", ")}</em>
            )}
            <button onClick={() => handleDelete(c.courseId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
