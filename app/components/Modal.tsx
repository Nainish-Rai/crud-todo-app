"use client";
import { addTodo } from "@/api/api";
import React, { FormEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

type Props = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

function Modal({ modalOpen, setModalOpen }: Props) {
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
  return (
    <dialog
      id="my_modal_1"
      className={`modal ${modalOpen ? "modal-open" : null}`}
    >
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
    </dialog>
  );
}

export default Modal;
