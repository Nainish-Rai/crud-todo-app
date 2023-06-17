"use client";
import { addTodo } from "@/api/api";
import React, { FormEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

type Props = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void | boolean;
  children: React.ReactNode;
};

function Modal({ modalOpen, setModalOpen, children }: Props) {
  return (
   <>
      {children}
    </>
  );
}

export default Modal;
