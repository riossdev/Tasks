import { Formik, Form } from "formik";
import { useTasks } from "../context/ContextProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTasks, getTask, updateTasks } = useTasks();
  const [tasks, setTasks] = useState({
    title: "",
    descriptions: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTaks = async () => {
      if (params.id) {
        const tasks = await getTask(params.id);
        console.log(tasks);
        setTasks({
          title: tasks.title,
          descriptions: tasks.descriptions,
        });
      }
    };
    loadTaks();
  }, []);
  return (
    <div className="p-4 bg-slate-600 w-80 rounded flex flex-col items-center">
      <h1 className="text-center font-bold p-4 text-4xl text-white">
        {params.id ? "Actualizar tarea! " : "Crear Tareas!.."}
      </h1>
      <div className="flex items-center">
        <Formik
          initialValues={tasks}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            // createTasks(values);

            if (params.id) {
              await updateTasks(params.id, values);
              navigate("/");
            } else {
              await createTasks(values);
            }

            setTasks({
              title: "",
              descriptions: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label>Nombre tarea</label>
              <br />
              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={values.title}
              />
              <br />
              <br></br>
              <label>Describe la tarea</label>
              <br />
              <textarea
                name="descriptions"
                rows="3"
                onChange={handleChange}
                value={values.descriptions}
              ></textarea>
              <br />
              <br />
              <button
                className="bg-gray-900 py-2 px-4 rounded text-white hover:bg-gray-700 "
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creando tarea" : "Crear tarea"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default TaskForm;
