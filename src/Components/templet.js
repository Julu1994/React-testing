import React from "react";
import {
    Grid,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

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
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom>
                        Pending Task
                    </Typography>

                    <Typography variant="body2">{task.element}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={removeHandler} size="small">
                        Delete
                    </Button>
                    <Button onClick={editHandling} size="small">
                        Edit
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Templet;
