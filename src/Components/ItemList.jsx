import React from 'react'
import UpdateForm from './UpdateForm'
import { RxTrash } from "react-icons/rx";

const ItemList = () => {
  return (
    <>
      <li>
           <span>
            <label className='labelItem'></label>
           </span>
           <UpdateForm/>
           <button className='btn-list'><RxTrash/></button>
      </li>
    </>
  )
}

export default ItemList