import React from "react";
import "./App.css";
import Todoitem from "./Todoitem.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Привет мир!!!",
      itemsList: ["Первое дело", "Второе дело"],
    };
  }

  addItemBntClickHandler() {
    const newValue = document.getElementById("add-item-input").value;
    const newItemsList = [newValue, ...this.state.itemsList];

    if (newValue.trim() !== "") {
      this.setState({ itemsList: newItemsList });
    } else {
    }
  }

  render() {
    const itemsList = this.state.itemsList;
    const itemsListElement = itemsList.map((item, i) => (
      <Todoitem key={i} text={item}></Todoitem>
    ));

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <div className="add-item">
          <input type="text" id="add-item-input" />
          <input
            type="button"
            value="+"
            className="add-item-btn"
            onClick={this.addItemBntClickHandler.bind(this)}
          />
        </div>
        <div id="items-list">{itemsListElement}</div>
      </div>
    );
  }
}

export default App;
