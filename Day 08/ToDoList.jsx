import { list } from 'postcss'
import React, {useState} from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat","Sleep","Gym"])
    const [newTask , setNewTask] = useState("")

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_,i) => 
            index != i
        )
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
    if (index > 0) {
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index - 1];
        updatedTasks[index - 1] = updatedTasks[index];
        updatedTasks[index] = temp;
        setTasks(updatedTasks);
    }
}

    function moveTaskDown(index) {
        if(index < tasks.length - 1){
           const updatedTasks = [...tasks]
           const temp = updatedTasks[index + 1]
           updatedTasks[index + 1] = updatedTasks[index]
           updatedTasks[index] = temp
           setTasks(updatedTasks)
        }
    }

    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input 
                type="text"
                placeholder='Enter a Task'
                value={newTask} 
                onChange={handleInputChange}
                id='new-task'/>
                 <button 
                 className='add-button' 
                 onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task,index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button
                        className='delete-button'
                        onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                        className='move-button'
                        onClick={() => moveTaskUp(index)}
                        disabled = {index === 0}>👆</button>
                        <button
                        className='move-button'
                        onClick={() => moveTaskDown(index)}
                        disabled = {index === tasks.length - 1}>👇</button>
                        
                    </li>
                ))}
            </ol>
        </div>
    )

}

export default ToDoList
