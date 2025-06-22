import { useState } from "react";
import InstanceForm from "../components/InstanceForm";
import InstanceList from "../components/InstanceList";

function Instances() {
  const [refresh, setRefresh] = useState(false);
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Course Instances</h2>

      <InstanceForm onInstanceCreated={() => setRefresh(!refresh)} />

      <div className="mt-10 bg-white p-6 rounded shadow-md max-w-md">
        <h4 className="text-md font-semibold mb-2">View Course Instances</h4>
        <input
          type="number"
          className="w-full mb-2 border rounded px-3 py-2"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="number"
          className="w-full mb-4 border rounded px-3 py-2"
          placeholder="Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        />
        <InstanceList year={year} semester={semester} key={refresh} />
      </div>
    </div>
  );
}

export default Instances;
