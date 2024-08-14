import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    //const [tasks, setTasks] = useState([]);
    const [tasks, setTasks] = useState(['Make food', 'Clean the House', 'Study'])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      };

      return (
        <>
            <div className="container" id="todoList">
                <h1>To do List</h1>
                <ul>
                    <li>
                        <input 
                            className="form-control form-control-lg" 
                            type="text" 
                            placeholder="add your things here" 
                            aria-label=".form-control-lg example" 
                            onChange={e => setInputValue(e.target.value)} 
                            value={inputValue}
                            onKeyDown={handleKeyDown}
                        />
                    </li>
                    {tasks.map((task, index) => (
                        <li key={index}>{task} <button className="deleteButton" onClick={() => deleteTask(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button></li>
                    ))}
                </ul>
                <div className="todoList-footer">{tasks.length} tasks left</div>
            </div>
        </>
    );
}
export default TodoList;



//pseudocodigo
//crear un titulo DONE
//crear un input para añadir datos DONE
//crear un footer que indique cuantos elementos quedan DONE
// que cada cosa que añada al input de genere en una lista abajo del mismo DONE
//añadir boton de eliminar tareas DONE