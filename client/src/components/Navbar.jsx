import { Link } from "react-router-dom";

function Nabvar() {
  return (
    <div className="text-white text-2xl p-4 flex justify-center">
      <ul className="flex gap-6">
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
