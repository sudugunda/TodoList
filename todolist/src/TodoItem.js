import React, { useState } from 'react'
import './TodoItem'

function TodoItem({ todoItem, todoIndex, handleDelete, handleSave }) {

    const [flag, setFlag] = useState(false);
    const [input, setInput] = useState("");

    const handleEdit = () => {
        setFlag(!flag);
    }

    const handleInput = (e) => {
        setInput(e.target.value);
    }
    
    const handleUpdate = () => {
        if(input !== ""){
            handleSave(todoIndex, input);
            setFlag(!flag);
            setInput("");
        }
        
    }

    return (
        <>
            <div>
                {
                    flag && <input type="text" placeholder='Enter todo to update' value={input} onChange={handleInput}/>
                }
                {
                    !flag && <p>{todoIndex}. {todoItem}</p>
                }
            </div>
            <button onClick={ () => handleDelete(todoIndex) }>delete</button>
            <button onClick={handleEdit}>edit</button>
            <button onClick={ handleUpdate }>save</button>
        </>
    )
}

export default TodoItem
