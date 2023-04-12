import React from "react";
import ItemList from "./ItemList";
import "../css/taskList.scss";

const TaskList = ({
  Todos,
  handleDeleteTodo,
  handleCompleteTodo,
  handleUpdateTodo,
}) => {
  return (
    <ul className="list">
      {Todos.map((todo) => (
        <ItemList
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  );
};

export default TaskList;
