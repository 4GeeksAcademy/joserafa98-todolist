import React, { useState } from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    return (
        <>
            <div className="container">
                <h1>To do List</h1>
                <ul>
                    <li>
                        <input 
                            className="form-control form-control-lg w-50" 
                            type="text" 
                            placeholder="add your things here" 
                            aria-label=".form-control-lg example" 
                            onChange={e => setInputValue(e.target.value)} 
                            value={inputValue}
                            onKeyDown={handleKeyDown}
                        />
                    </li>
                    <li>Make food</li>
                    <li>Clean the House</li>
                    <li>Study</li>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;



//pseudocodigo
//crear un titulo DONE
//crear un input para añadir datos DONE
//crear un footer que indique cuantos elementos quedan
// que cada cosa que añada al input de genere en una lista abajo del mismo DONE
//añadir boton de eliminar tareas