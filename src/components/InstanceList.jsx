import { useEffect, useState } from "react";
import { fetchInstances, deleteInstance } from "../api";

function InstanceList({ year, semester }) {
  const [instances, setInstances] = useState([]);

  const load = () => {
    if (year && semester) {
      fetchInstances(year, semester).then(setInstances);
    }
  };

  useEffect(() => {
    load();
  }, [year, semester]);

  const handleDelete = async (courseId) => {
    try {
      await deleteInstance(year, semester, courseId);
      load();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold">Instances for {year} - Semester {semester}</h3>
      {instances.length === 0 ? (
        <p className="text-gray-500 mt-2">No instances found.</p>
      ) : (
        <ul className="space-y-2 mt-4">
          {instances.map((i) => (
            <li key={i.id} className="p-4 bg-gray-100 rounded flex justify-between items-center">
              <span>{i.course.courseId} - {i.course.title}</span>
              <button
                onClick={() => handleDelete(i.course.courseId)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InstanceList;
