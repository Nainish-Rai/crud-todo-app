import { ITodo } from "@/types/todos";
import { json } from "stream/consumers";

const BASE_URL = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITodo[]> => {
  const res = await fetch(`${BASE_URL}/tasks`, { cache: "no-store" });
  const data = await res.json();
  return data;
};

export const addTodo = async (todo: ITodo): Promise<ITodo> => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITodo): Promise<ITodo> => {
  const res = await fetch(`${BASE_URL}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
  });
};
