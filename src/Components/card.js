import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    Grid,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    IconButton,
    Tooltip,
    Checkbox,
} from "@mui/material";

function CardBar(props) {
    const { task, click, edit } = props;
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
            lg={3}
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
                        My todos
                    </Typography>

                    <Typography variant="body2">{task.element}</Typography>
                </CardContent>
                <CardActions>
                    <Tooltip onClick={removeHandler} title="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    <Button onClick={editHandling} size="small">
                        Edit
                    </Button>
                    <Checkbox
                        sx={{
                            "&:hover": { bgcolor: "transparent" },
                        }}
                        color="secondary"
                        {...label}
                    />
                </CardActions>
            </Card>
        </Grid>
    );
}

export default CardBar;
