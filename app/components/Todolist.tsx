import { ITodo } from "@/types/todos";
import React from "react";
import Task from "./Task";

interface TodoListProp {
  tasks: ITodo[];
}

type Props = {};

function Todolist({ tasks }: TodoListProp) {
  return (
    <div className="overflow-x-auto max-w-5xl mx-auto ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Title</th>
            <th className="w-[5%]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Data Render */}
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;
