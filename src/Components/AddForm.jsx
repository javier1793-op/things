import React from 'react'
import '../css/addForm.scss'
import { RxPlusCircled } from "react-icons/rx";

const addForm = () => {
  return (
    <>
        <form className='addForm'>
            <input 
            type="text"
            className='textAdd'
            name='description'
            placeholder='what is there to do?'
            />
            <button type='submit'><RxPlusCircled/></button>
        </form>
    </>
  )
}

export default addForm