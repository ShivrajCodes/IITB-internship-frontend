import { useEffect, useState } from "react";
import { fetchCourses, deleteCourse } from "../api";

function CourseList() {
  const [courses, setCourses] = useState([]);

  const loadCourses = () => {
    fetchCourses().then(setCourses);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const handleDelete = async (courseId) => {
    try {
      await deleteCourse(courseId);
      loadCourses();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2">All Courses</h3>
      <ul className="space-y-2">
        {courses.map((c) => (
          <li key={c.courseId} className="p-4 bg-gray-100 rounded flex justify-between items-center">
            <div>
              <strong>{c.courseId}</strong>: {c.title}
              {c.prerequisites?.length > 0 && (
                <span className="text-sm text-gray-600 ml-2">
                  (Prereqs: {c.prerequisites.map((p) => p.courseId).join(", ")})
                </span>
              )}
            </div>
            <button onClick={() => handleDelete(c.courseId)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
