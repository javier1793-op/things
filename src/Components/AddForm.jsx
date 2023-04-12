import React from 'react'
import '../css/addForm.scss'
import { RxPlusCircled } from "react-icons/rx";
import { useForm } from '../hooks/useForm'

const addForm = ({handleNewTodo}) => {

  const {description, inputChange, resetChange}=useForm({
    description:'',
  })


  const handleSubmit = e =>{
    e.preventDefault();

   if(description.length <= 1) return;

    let newTodo={
      id: new Date().getTime(),
      description: description,
      done: false
    }

    handleNewTodo(newTodo);
    resetChange();
    
  }

  return (
    <>
        <form className='addForm' onSubmit={handleSubmit}>
            <input 
            type="text"
            className='textAdd'
            name='description'
            value={description}
            onChange={inputChange}
            placeholder='what is there to do?'
            />
            <button type='submit'><RxPlusCircled/></button>
        </form>
    </>
  )
}

export default addForm