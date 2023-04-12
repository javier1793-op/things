import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './css/app.scss';
import AddForm from './Components/AddForm';
import TaskList from "./Components/TaskList";
import { useTodo } from "./hooks/useTodo";

function App() {

  const {
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
    Todos,
    countTask,
    countPending}=useTodo();

    

  return (
    <div className="App">
      <div className="cardContainer">
        <div className="cardHead">
          <h1>things to do</h1>
          <section>
            <h3>N° tasks: <span>{countTask}</span> </h3>
            <h3>Pending: <span>{countPending}</span></h3>
          </section>
        </div>
        <div className="cardAdd">
          <h2>add task</h2>
          <AddForm handleNewTodo={handleNewTodo}/>
        </div>
          <TaskList
            Todos={Todos}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
      </div>
    </div>
  );
}

export default App;
