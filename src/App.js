import "./App.css";
import Todoitem from "./Todoitem.js";

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <div className="add-item">
        <input type="text" id="add-item-input" />
        <input type="button" value="+" />
        <div id="items-list">
          <Todoitem text="Первое дело"></Todoitem>
          <Todoitem text="Первое дело"></Todoitem>
          <Todoitem text="dfihsdfihsdfuhsdfuhfusdhfuisdhfhsidf"></Todoitem>
        </div>
      </div>
    </div>
  );
}

export default App;
