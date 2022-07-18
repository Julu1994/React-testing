import "./third.css";
import React, { useState } from "react";
import Templet from "./templet";

function TaskThird() {
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

    const deleteHnadler = (i) => {
        const filteredTask = taskList.filter((item) => item.id !== i.id);
        setTaskList(filteredTask);
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
                <Templet key={item.id} task={item} click={deleteHnadler} />
            ))}
        </div>
    );
}

export default TaskThird;
