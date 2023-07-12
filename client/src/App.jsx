import { Routes, Route } from "react-router-dom";

import TaskPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";

import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
