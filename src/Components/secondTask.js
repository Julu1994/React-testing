import "./secondTask.css";
import React, { useState } from "react";

function TaskSecond() {
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
                        onClick={() => {
                            const filteredArray = taskList.filter(
                                (e) => e.id !== item.id
                            );
                            setTaskList(filteredArray);
                        }}>
                        delete
                    </button>
                </li>
            ))}
        </div>
    );
}

export default TaskSecond;
