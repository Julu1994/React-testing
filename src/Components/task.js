import "./task.css";
import React, { useState } from "react";

function Task() {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const taskHandler = (event) => {
        event.preventDefault();

        const taskObject = {
            id: Math.floor(Math.random() * 500),
            element: task,
        };

        setTaskList([...taskList, taskObject]);

        setTask("");
    };
    function Remover(id) {
        const filteredArray = taskList.filter((newItem) => newItem.id !== id);
        setTaskList(filteredArray);
    }

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
                <li key={item.id} className="task">
                    {item.element}
                    <button
                        className="btn"
                        onClick={() => {
                            Remover(item.id);
                        }}>
                        delete
                    </button>
                </li>
            ))}
        </div>
    );
}

export default Task;
