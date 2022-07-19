import React from "react";
import { Grid } from "@mui/material";

function Templet(props) {
    const { task, click, edit } = props;

    const removeHandler = () => {
        click(task);
    };

    const editHandling = () => {
        edit(task);
    };

    return (
        <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <h2>{task.element}</h2>
            <button onClick={removeHandler} className="btn">
                Delete
            </button>
            <button onClick={editHandling} className="btn">
                Edit
            </button>
        </Grid>
    );
}

export default Templet;
