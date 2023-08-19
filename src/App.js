import { useState } from "react";
import './App.css';

function App() {
  const [Inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const itemEvent = (event) => {
    setInputlist(event.target.value);
  };

  const listofitems = () => {
    if (editIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[editIndex] = Inputlist;
      setItems(updatedItems);
      setInputlist("");
      setEditIndex(-1);
    } else {
      setItems((oldItems) => {
        return [...oldItems, Inputlist];
      });
      setInputlist("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const editItem = (index, newValue) => {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    setItems(updatedItems);
  };

  const deleteAll = () => {
    setItems([]);
  }

  return (
    <div className="main_div">
      <div className="center_div"></div>
      <br />
      <center>
      <h1>Todo List</h1>
      <br />
      <input type="text" placeholder="Add an Item" value={Inputlist} onChange={itemEvent}
      />
      <button onClick={listofitems}> + Add</button>
      <button onClick={deleteAll}>  x deleteAll</button>
      <ol>
        {items.map((itemval, index) => (
          <li key={index}>
            {itemval}
            <button onClick={() => editItem(index, prompt('Edit item here:', itemval))}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ol>
      </center>
    </div>
  );
}

export default App;
