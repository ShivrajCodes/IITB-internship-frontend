const BASE_URL = "http://localhost:8080/api";

export const fetchCourses = async () => {
  const res = await fetch(`${BASE_URL}/courses`);
  return res.json();
};

export const createCourse = async (course) => {
  const res = await fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(course),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error creating course");
  }
  return res.json();
};

export const deleteCourse = async (courseId) => {
  const res = await fetch(`${BASE_URL}/courses/${courseId}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error deleting course");
  }
};

export const createInstance = async (instance) => {
  const res = await fetch(`${BASE_URL}/instances`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(instance),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error creating instance");
  }
  return res.json();
};

export const fetchInstances = async (year, semester) => {
  const res = await fetch(`${BASE_URL}/instances/${year}/${semester}`);
  return res.json();
};

export const deleteInstance = async (year, semester, courseId) => {
  const res = await fetch(`${BASE_URL}/instances/${year}/${semester}/${courseId}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error deleting instance");
  }
};
