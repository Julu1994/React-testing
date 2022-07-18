import "./third.css";
import React, { useState } from "react";
import Templet from "./templet";

function TaskThird() {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editedTask, setEditedTask] = useState();

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

    const editHandler = (obj) => {
        setEdit(true);
        setTask(obj.element);
        setEditedTask(obj);
    };

    const saveChange = (event) => {
        const taskIndex = taskList.findIndex(
            (item) => item.id === editedTask.id
        );
        taskList[taskIndex].element = task;
        setEdit(false);
        setTask("");
        event.preventDefault();
    };

    return (
        <div>
            {!edit && (
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
                </div>
            )}

            {edit && (
                <div>
                    <form className="form" onSubmit={saveChange}>
                        <label htmlFor="title"> Edit </label>

                        <input
                            className="task-input"
                            type="text"
                            value={task}
                            onChange={(event) => setTask(event.target.value)}
                        />
                        <button type="submit">Save</button>
                        <button
                            onClick={() => {
                                setEdit(false);
                                setTask("");
                            }}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}

            {taskList.map((item) => (
                <Templet
                    key={item.id}
                    task={item}
                    click={deleteHnadler}
                    edit={editHandler}
                />
            ))}
        </div>
    );
}

export default TaskThird;
