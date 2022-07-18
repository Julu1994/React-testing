import React from "react";
import "./templet.css";

function Templet(props) {
    const { task, click, edit } = props;

    const removeHandler = () => {
        click(task);
    };

    const editHandling = () => {
        edit(task);
    };

    return (
        <div className="task-list">
            <h2>{task.element}</h2>
            <button onClick={removeHandler} className="btn">
                Delete
            </button>
            <button onClick={editHandling} className="btn">
                Edit
            </button>
        </div>
    );
}

export default Templet;
