import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/ContextProvider";

import TaskPage from "./pages/Tasks";
import TaskForm from "./pages/TasksForms";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-zinc-800 h-screen p-12 flex flex-col items-center gap-4">
      <h1 className="text-center font-extrabold p-8 text-4xl text-white">
        App Tasks
      </h1>
      <TaskContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/createTasks" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
    </div>
  );
}

export default App;
