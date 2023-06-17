import { ITodo } from "@/types/todos"
import { json } from "stream/consumers"

const BASE_URL = "http://localhost:3001"

export const getAllTodos = async () : Promise<ITodo[]> =>{
    const res = await fetch(`${BASE_URL}/tasks`,{cache:'no-store'})
    const data = await res.json()
    return data

}

export const addTodo =async (todo:ITodo): Promise<ITodo> => {
    console.log("activated")
    const res = await fetch (`${BASE_URL}/tasks`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body : JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo
    
}