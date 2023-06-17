'use client'
import React , {useState} from 'react'
import { GrFormAdd } from "react-icons/Gr";
import Modal from './Modal';


function AddTask() {
   
    const [modalOpen,setModalOpen] = useState<boolean>(false)
  return (
    <div className="w-full flex justify-center my-5">
    <button onClick={()=>window.my_modal_1.showModal()} className="btn btn-primary w-[80%] mx-auto rounded-md  text-center ">
      Add a new task <GrFormAdd size={20} />
    </button>
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
  </div>
  )
}

export default AddTask