import { Formik, Form } from "formik";
import { useTasks } from "../context/ContextProvider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTasks, getTask } = useTasks();
  const params = useParams();

  const [Task, setTask] = useState({
    title: "",
    descriptions: "",
  });

  useEffect(() => {
    const loadTaks = async () => {
      if (params.id) {
        await getTask(params.id);
        setTask({
          title: Task.title,
          descriptions: Task.descriptions,
        });
      }
    };
    loadTaks();
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-center font-bold p-4">
        {params.id ? "Actualizar tarea! " : "Crear Tareas!.."}
      </h1>
      <Formik
        initialValues={Task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          createTasks(values);
          actions.resetForm(values);
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
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creando tarea" : "Crear tarea"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
