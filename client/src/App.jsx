import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import TaskPage from "./pages/Tasks";
import TaskForm from "./pages/TasksForms";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <h1 className="text-center font-extrabold p-8 text-xl">App Tasks</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/createTasks" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
