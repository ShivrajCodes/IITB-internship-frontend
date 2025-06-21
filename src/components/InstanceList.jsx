import { useEffect, useState } from "react";
import api from "../api";

function InstanceList({ year, semester }) {
  const [instances, setInstances] = useState([]);

  const fetchInstances = () => {
    api.get(`/instances/${year}/${semester}`)
      .then((res) => setInstances(res.data))
      .catch(() => setInstances([]));
  };

  const handleDelete = async (courseId) => {
    try {
      await api.delete(`/instances/${year}/${semester}/${courseId}`);
      fetchInstances();
    } catch (err) {
      alert(err.response?.data || "Error deleting instance");
    }
  };

  useEffect(() => {
    if (year && semester) fetchInstances();
  }, [year, semester]);

  return (
    <div>
      <h3>Instances for {year} - Semester {semester}</h3>
      {instances.length === 0 ? <p>No instances found.</p> : (
        <ul>
          {instances.map((i) => (
            <li key={i.id}>
              {i.course.courseId} - {i.course.title}
              <button onClick={() => handleDelete(i.course.courseId)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InstanceList;
