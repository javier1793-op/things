import React from 'react'
import ItemList from './ItemList'
import '../css/taskList.scss'

const TaskList = () => {
  return (
    <ul className='list'>
      <ItemList/>
      <ItemList/>
      <ItemList/>
      <ItemList/>
    </ul>
  )
}

export default TaskList