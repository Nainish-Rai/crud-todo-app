"use client";
import { deleteTodo, editTodo } from "@/api/api";
import { ITodo } from "@/types/todos";
import React, { useState, FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/Rx";
import { FiEdit3 } from "react-icons/Fi";
import Modal from "./Modal";

interface props {
  task: ITodo;
}

function Task({ task }: props) {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const Router = useRouter();
  const [newTextValue, setNewTextValue] = useState<string>(task.title);
  const handleEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault;
    
      (await editTodo({
        userId: task.userId,
        id: task.id,
        title: newTextValue,
        completed: task.completed,
      }));

    setOpenEditModal(false);
    Router.refresh();
  };
  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);

    setOpenDeleteModal(false);
    Router.refresh();
  };
  return (
    <tr>
      <td>{task.title}</td>
      <td className="flex gap-2">
        {" "}
        <FiEdit3
          className="cursor-pointer hover:scale-125 duration-200"
          size={20}
          onClick={() => window.my_modal_2.showModal()}
        />
        <RxCross1
          className=" text-red-500 cursor-pointer hover:scale-125 duration-200"
          size={20}
          onClick={() => window.my_modal_3.showModal()}
        />
        <Modal modalOpen={openEditModal} setModalOpen={setOpenEditModal}>
          <dialog
            id="my_modal_2"
            className={`modal ${openEditModal ? "modal-open" : null}`}
          >
            <form
              method="dialog"
              onSubmit={handleEditTodo}
              className="modal-box"
            >
              <button
                onClick={() => setOpenEditModal(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">Edit Your Task</h3>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type here"
                  autoFocus={true}
                  onChange={(e) => {
                    setNewTextValue(e.target.value);
                  }}
                  className="input input-bordered shadow-md w-full max-w-xs rounded-lg my-4"
                />
                <button
                  type="submit"
                  className="btn btn-primary rounded-lg mx-4 shadow-md border"
                  onClick={() => setOpenEditModal(false)}
                >
                  Edit Task
                </button>
              </div>
            </form>
          </dialog>
        </Modal>
        <Modal modalOpen={openDeleteModal} setModalOpen={setOpenDeleteModal}>
          <dialog
            id="my_modal_3"
            className={`modal ${openDeleteModal ? "modal-open" : null}`}
          >
            <form method="dialog" className="modal-box">
              <button
                onClick={() => setOpenDeleteModal(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <h3 className="font-bold text-lg ml-5">Are You Sure ?</h3>
              <div className="flex my-5">
                <button
                  className="btn btn-primary rounded-lg mx-4 shadow-md border"
                  onClick={() => setOpenDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-accent rounded-lg mx-4 shadow-md border"
                  onClick={() => handleDeleteTodo(task.id)}
                >
                  Delete
                </button>
              </div>
            </form>
          </dialog>
        </Modal>
      </td>
    </tr>
  );
}

export default Task;
