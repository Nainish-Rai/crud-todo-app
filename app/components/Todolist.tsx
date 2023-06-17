import { ITodo } from '@/types/todos'
import React from 'react'
interface TodoListProp {
    tasks:ITodo[]
}

type Props = {}

function Todolist ({tasks}: TodoListProp) {
  return (
    <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* Data Render */}
      {tasks.map((task,index)=>{
        return(
            <tr key={task.id}>
        <td>{task.title}</td>
        <td>{task.completed}</td>
      </tr>

        )
      })}
      
    </tbody>
  </table>
</div>
  )
}

export default Todolist