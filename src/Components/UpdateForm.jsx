import React, { useRef, useState } from 'react'
import { RxPencil1 } from "react-icons/rx";
import '../css/updateForm.scss'
import { useForm } from '../hooks/useForm'

const UpdateForm = ({todo,handleUpdateTodo}) => {

  const [disable, setDisable] = useState(true)
  const disablechange=useRef()

  const {updateDescription, inputChange}= useForm({
    updateDescription: todo.description
  })

  const upadteSubmit = e =>{
    e.preventDefault();

    const id = todo.id;
    const description = updateDescription;

    handleUpdateTodo(id,description)

    setDisable(!disable)
    disablechange.current.focus();
  }

  return (
    <>
    <form className='editForm' onSubmit={upadteSubmit}>
        <input 
        type="text"
        name='updateDescription'
        value={updateDescription}
        className={`text ${todo.done ? 'text-nule':''}`}
        onChange={inputChange}
        readOnly={disable}
        ref={disablechange}
        />
        <button  className='btn-list' type='submit'><RxPencil1/></button>
    </form>
</>
  )
}

export default UpdateForm