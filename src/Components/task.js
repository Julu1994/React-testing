import "./task.css";
import React, { useState } from "react";

function Task() {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const taskHandler = (event) => {
        event.preventDefault();
        const myTask = { task };
        setTaskList([...taskList, myTask]);
        console.log(taskList);
    };
    return (
        <div>
            <form className="form" onSubmit={taskHandler}>
                <label htmlFor="title"> Title </label>

                <input
                    className="task-input"
                    type="text"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                />
                <button type="submit">Save</button>
            </form>
            {taskList.map((item) => (
                <li key={item.task} className="task">
                    {item.task}
                </li>
            ))}
        </div>
    );
}

export default Task;
