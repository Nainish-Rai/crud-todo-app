
import AddTask from "./components/AddTask";
import Todolist from "./components/Todolist";
import { getAllTodos } from "@/api/api";
export default async function  Home() {
  const tasks = await getAllTodos();
  console.log(tasks)
  
  return (
    <main className=" w-full max-w-6xl mx-auto m-2">
      <h1 className="mx-auto text-center font-black  text-3xl ">
        TODO LIST APP
      </h1>
      <AddTask/>
      <Todolist tasks={tasks}/>
    </main>
  );
}
