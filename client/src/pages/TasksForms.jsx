import { Formik, Form } from "formik";

import { createTasksRequest } from "../api/tasks.api";

function TaskForm() {
  return (
    <div className="p-4">
      <h1 className="text-center font-bold p-4">Crear Tareas!..</h1>
      <Formik
        initialValues={{
          title: "",
          descriptions: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await createTasksRequest(values);
            console.log(response.data);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
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
