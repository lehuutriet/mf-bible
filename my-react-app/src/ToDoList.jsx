import React, { useState } from "react";

function ToDoList(){
    const [task, setTask] = useState(["Eat breakfast", "take a shower", "run"]);
    const [newtask, setNewTask] = useState(""); // Fixed the state variable name to setNewTask

    function addTask(){
        if (newtask.trim() !== "") {
            setTask(t => [...t, newtask]);
            setNewTask(""); // Clear the input field after adding the task
        }
    }

    function deleteTask(index){
        const updatedTasks = [...task.slice(0, index), ...task.slice(index + 1)];
        setTask(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...task];
            // Swap elements at index and index - 1
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTask(updatedTasks); // Set the state with the updated tasks array
        }
    }
    

    function moveTaskDown(index){
        if(index < task.length - 1){ // Check if the index is not already at the bottom
            const updatedTasks = [...task];
            // Swap elements at index and index + 1
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTask(updatedTasks); // Set the state with the updated tasks array
        }
    }
    

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                {/* Fixed the input field to update newtask state */}
                <input 
                    type="text" 
                    placeholder="Enter the text"
                    value={newtask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                />
                <button className="Add-text" onClick={addTask}>Add</button>
            </div>
        
            <ol>
                {task.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-up-button" onClick={() => moveTaskUp(index)}>
                            Move Up
                        </button>
                        <button className="move-down-button" onClick={() => moveTaskDown(index)}>
                            Move Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;
