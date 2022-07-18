import React from "react";
import "./templet.css";

function Templet({ task, click }) {
    function removeHandler() {
        click(task);
    }

    return (
        <div className="task-list">
            <h2>{task.element}</h2>
            <button onClick={removeHandler} className="btn">
                Delete
            </button>
        </div>
    );
}

export default Templet;
