import React from 'react'
import { RxPencil1 } from "react-icons/rx";
import '../css/updateForm.scss'

const UpdateForm = () => {
  return (
    <>
    <form className='editForm'>
        <input 
        type="text"
        name='description'
        className='text'
        value='aca la primer tarea'
        />
        <button  className='btn-list' type='submit'><RxPencil1/></button>
    </form>
</>
  )
}

export default UpdateForm