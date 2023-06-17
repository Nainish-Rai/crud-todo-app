import { ITodo } from "@/types/todos"

const BASE_URL = "https://my-json-server.typicode.com/Nainish-Rai/mock-server"

export const getAllTodos = async () : Promise<ITodo[]> =>{
    const res = await fetch(`${BASE_URL}/tasks`)
    const data = await res.json()
    return data

}