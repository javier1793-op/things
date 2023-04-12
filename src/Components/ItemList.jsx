import React from "react";
import UpdateForm from "./UpdateForm";
import { RxTrash } from "react-icons/rx";

const ItemList = ({
  handleDeleteTodo,
  handleCompleteTodo,
  handleUpdateTodo,
  todo,
}) => {
  console.log(todo )
  return (
    <>
      <li>
        <span
          onClick={() => 
            handleCompleteTodo(todo.id)
          }
        >
          <label className={`labelItem ${todo.done ? 'active':''}`}></label>
        </span>
        <UpdateForm 
        handleUpdateTodo={handleUpdateTodo}
        todo={todo}
        />
        <button
          className="btn-list"
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
        >
          <RxTrash />
        </button>
      </li>
    </>
  );
};

export default ItemList;
