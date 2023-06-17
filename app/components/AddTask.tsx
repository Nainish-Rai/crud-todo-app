"use client";
import React, { FormEventHandler, useState } from "react";
import { GrFormAdd } from "react-icons/Gr";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { addTodo, editTodo } from "@/api/api";

function AddTask() {
  const Router = useRouter();
  const [textValue, setTextValue] = useState<string>("");
  const handleSubmitTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault;
    textValue &&
      (await addTodo({
        userId: `1`,
        id: uuidv4(),
        title: textValue,
        completed: false,
      }));

    setTextValue("");
    setModalOpen(false);
    Router.refresh();
  };
 
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div className="w-full flex justify-center my-5">
      <button
        onClick={() => window.my_modal_1.showModal()}
        className="btn btn-primary w-[80%] mx-auto rounded-md  text-center cursor-pointer hover:scale-105 duration-200 "
      >
        Add a new task <GrFormAdd size={20} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form method="dialog" onSubmit={handleSubmitTodo} className="modal-box">
          <button
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Enter Your Task</h3>
          <input
            type="text"
            placeholder="Type here"
            value={textValue}
            autoFocus={true}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
            className="input input-bordered shadow-md w-full max-w-xs rounded-lg my-4"
          />
          <button
            type="submit"
            className="btn btn-primary rounded-lg mx-4 shadow-md border"
            onClick={() => setModalOpen(false)}
          >
            Add Task
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;
