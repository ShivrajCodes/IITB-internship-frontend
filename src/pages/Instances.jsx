import { useState } from "react";
import InstanceForm from "../components/InstanceForm";
import InstanceList from "../components/InstanceList";

function Instances() {
  const [refresh, setRefresh] = useState(false);
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");

  return (
    <div>
      <h2>Course Instances</h2>
      <InstanceForm onInstanceCreated={() => setRefresh(!refresh)} />
      <div style={{ marginTop: "1rem" }}>
        <h4>View Course Instances</h4>
        <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
        <input type="number" placeholder="Semester" value={semester} onChange={(e) => setSemester(e.target.value)} />
        <InstanceList year={year} semester={semester} key={refresh} />
      </div>
    </div>
  );
}

export default Instances;
