import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import taskDTO from '../../dtos/tasks';
import styleLabels from '../../utils/styleLabels'
const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    title: {
        fontSize: 14
    },
});


export default function TaskView(props) {
    const task = props;
    const classes = useStyles();

    const editHandler = () => {
        alert('Edit');
    };

    const deleteHandler = () => {
        props.deleteHandler(task.id)
    }
    return (
        <Card className={classes.root} variant="outlined" draggable="true">
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {task.name}
                </Typography>
                <hr />
                <Typography gutterBottom variant="body2" component="p">
                    {styleLabels(task.labels)}
                </Typography>
                <Typography>
                    {task.dueDate}{" "}
                    <Button size="small" onClick={editHandler}>
                        Edit
          </Button>{" "}
                    <Button size="small" onClick={deleteHandler}>
                        Delete
          </Button>
                </Typography>
            </CardContent>
        </Card>
    );
}
