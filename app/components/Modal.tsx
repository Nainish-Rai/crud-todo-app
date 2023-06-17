"use client";
import React, { FormEventHandler , useState} from "react";

type Props = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

function Modal({ modalOpen, setModalOpen }: Props) {
  const [textValue, setTextValue] = useState<string>("");
  const handleSubmitTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault;
    textValue && console.log(textValue)
    setTextValue("");
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
          onChange={(e)=>{setTextValue(e.target.value)}}
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
