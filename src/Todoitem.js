import "./Todoitem.css";

function Todoitem(props) {
  return (
    <div className="Todoitem">
      {props.text}
      <div className="item-btns">
        <input type="button" value="✓" />
        <input type="button" value="✘" />
      </div>
    </div>
  );
}

export default Todoitem;
