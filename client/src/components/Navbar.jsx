import { Link } from "react-router-dom";

function Nabvar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">🏘️ Home</Link>
        </li>
        <li>
          <Link to="/createTasks">📱 Create Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nabvar;
