import { Formik, Form } from "formik";
import  {createTaskRequest} from '../api/tasks.api.js'

function TaskForm() {
  return (
    <div>
      <h1>Forms</h1>
      <Formik
        initialValues={{
          title: "",
          descriptions: "",
        }}
        onSubmit= { async (values)=>{
          console.log(values)
          try {
            const response = await createTaskRequest(values)
          } catch (error) {
            console.log(error)
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Titulo"
              onChange={handleChange}
            />
            <br />
            <br />
            <label>Description</label>
            <textarea
              name="descriptions"
              rows="3"
              placeholder="Descripción"
              onChange={handleChange}
            ></textarea>
            <br />
            <br />
            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default TaskForm;

