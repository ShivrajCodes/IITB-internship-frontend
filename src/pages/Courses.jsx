import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import { useState } from "react";

function Courses() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h2>Courses</h2>
      <CourseForm onCourseCreated={() => setRefresh(!refresh)} />
      <CourseList key={refresh} />
    </div>
  );
}

export default Courses;
