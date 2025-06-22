import { useState } from "react";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";

function Courses() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Courses</h2>
      <CourseForm onCourseCreated={() => setRefresh(!refresh)} />
      <CourseList key={refresh} />
    </div>
  );
}

export default Courses;
