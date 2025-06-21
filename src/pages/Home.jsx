import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Courses Manager</h1>
      <nav>
        <ul>
          <li><Link to="/courses">Manage Courses</Link></li>
          <li><Link to="/instances">Manage Course Instances</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
