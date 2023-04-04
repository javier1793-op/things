import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './css/app.scss';
import AddForm from './Components/AddForm';
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      <div className="cardContainer">
        <div className="cardHead">
          <h1>things to do</h1>
          <section>
            <h3>N° tasks: <span>7</span> </h3>
            <h3>Pending: <span>17</span></h3>
          </section>
        </div>
        <div className="cardAdd">
          <h2>add task</h2>
          <AddForm/>
        </div>
          <TaskList/>
      </div>
    </div>
  );
}

export default App;
