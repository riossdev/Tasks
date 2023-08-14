import { Formik, Form } from "formik";
import { createTaskRequest } from '../api/tasks.api.js'
import { useTask } from '../context/TaskProvider'
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskForm() {
  const { getTaskss } = useTask()
  const params = useParams()

  useEffect(()=>{
    const loadTasks = async () =>{
      if(params.id){
        const task = await getTaskss(params.id)
        console.log(task)
      }
    }
    loadTasks()
  },[])

  return (
    <div>
      <h1>
        {params.id ? "Actualizar Tarea" : "Crear Tarea"}
      </h1>
      <Formik
        initialValues={{ 
          title: "",
          descriptions: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values)
          try {
            const response = await createTaskRequest(values)
            actions.resetForm()
          } catch (error) {
            console.log(error)
          }
        }}
      >   
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              placeholder="Titulo"
              onChange={handleChange}
              value={values.title}
            />
            <br />
            <br />
            <label>Description</label>
            <br />
            <textarea
              name="descriptions"
              rows="3"
              placeholder="Descripción"
              onChange={handleChange}
              value={values.descriptions}
            ></textarea>
            <br />
            <br />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default TaskForm;