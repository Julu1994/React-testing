import "./third.css";
import React, { useState, useEffect } from "react";
import CardBar from "./card";
import { TextField, Button, Box, Grid } from "@mui/material/";
import ResponsiveAppBar from "./header";
import BasicDateTimePicker from "./date";

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
        if (taskObject.element !== "") {
            setTaskList([...taskList, taskObject]);
        } else {
            alert("Please write a task");
        }
        setTask("");
    };

    useEffect(() => {
        const localStoreData = window.localStorage.getItem("myTask");
        if (!localStoreData !== null) setTaskList(JSON.parse(localStoreData));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("myTask", JSON.stringify(taskList));
        console.log("hi");
    }, [taskList]);

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
        if (task !== "") {
            taskList[taskIndex].element = task;
        } else {
            alert("Task field is empty");
        }

        setEdit(false);
        setTask("");
        event.preventDefault();
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ResponsiveAppBar />
                </Grid>
                <Grid item xs={12} className="date-time">
                    <BasicDateTimePicker />
                </Grid>
                <Grid item xs={12}>
                    {!edit && (
                        <div>
                            <form className="form" onSubmit={taskHandler}>
                                <TextField
                                    id="outlined-basic"
                                    label="Write your task"
                                    variant="outlined"
                                    sx={{ width: 200, m: 2 }}
                                    value={task}
                                    onChange={(event) =>
                                        setTask(event.target.value)
                                    }
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ p: 1.9, width: 120, m: 2 }}>
                                    Add task
                                </Button>
                            </form>
                        </div>
                    )}

                    {edit && (
                        <div>
                            <form className="form" onSubmit={saveChange}>
                                <TextField
                                    id="outlined-basic"
                                    label="Edit the task"
                                    variant="outlined"
                                    value={task}
                                    onChange={(event) =>
                                        setTask(event.target.value)
                                    }
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary">
                                    Save
                                </Button>
                                <Button
                                    onClick={() => {
                                        setEdit(false);
                                        setTask("");
                                    }}
                                    variant="contained"
                                    color="warning">
                                    Cancel
                                </Button>
                            </form>
                        </div>
                    )}
                </Grid>
                {taskList.map((item) => (
                    <CardBar
                        key={item.id}
                        task={item}
                        click={deleteHnadler}
                        edit={editHandler}
                    />
                ))}
            </Grid>
        </Box>
    );
}

export default TaskThird;
