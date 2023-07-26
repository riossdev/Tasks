import { useEffect, useState } from 'react'
import { getRequestTask } from '../api/tasks.api.js'

function getTask() {

  const [Task, setTask] = useState([]) 
  useEffect(()=>{
    async function loadTask (){
      const response = await getRequestTask()
      setTask(response)
    }
    loadTask()
  },[])

  return(
    <div>
        {Task.map( task =>(
          <div>
            <h3  >{task.title}</h3>
            <p>{task.descriptions}</p>
          </div>
        ))
        }
        <h1>Takss</h1>
    </div> 
  )
}


export default getTask