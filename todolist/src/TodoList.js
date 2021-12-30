import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import TodoItem from './TodoItem'

function TodoList() {

    const arr = [
        'sudu',
        'shra',
        'kusn',
        'Patw'
    ]

  const [items, setItems] = useState(arr);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    console.log("delete", id);
    setItems((items) => {
      return items.filter((element, index) => {
        return index !== id;
      });
    });
  };

  const handleSave = (id, input) => {
    setItems((items) => {
        return items.map((element, index) => {
          if(index !== id) return element;
          else return  input;
        });
    });
  };

  return (
    <>
      <div className="input-box">
        <input
          type="text"
          placeholder="Add a Item"
          value={input}
          onChange={handleInput}
        />
        <button onClick={handleClick}>
          <BsFillPlusCircleFill className="btn-icon" />
        </button>
      </div>
      <div className="todo-list">
        <ol className="list">
          {items.map((item, i) => {
            return (
              <li className="list-item" key={i}>
                <TodoItem todoItem={item} todoIndex={i} handleDelete={handleDelete} handleSave={handleSave}/>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default TodoList;
