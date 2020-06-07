import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from "@material-ui/core/Typography";
import styleLabels from '../../utils/styleLabels'
import EditTaskDialog from "../edit_dialog/EditTaskDialog";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        cursor: 'pointer'
    },
    title: {
        fontSize: 15
    },
    description: {
        fontSize: 12
    },
    date: {
        fontSize: 10
    },
    cardActionArea: {
        backgroundColor: 'white'
    },
    formControlLabel: {
        fontSize: 12
    },
    iconButton: {
        color: '#4285cc59',
        '&:hover': {
            color: '#3b80c7',
        }
    }
});


export default function TaskView(props) {
    const task = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [completed, setCompleted] = React.useState(props.status);
    const [showDelete, setShowDelete] = React.useState(false);

    React.useEffect(() => {
        setCompleted(props.status);
    }, [props.status]);

    const openEditDialog = () => {
        setOpen(true);
    };

    const closeEditDialog = () => {
        setOpen(false);
    }

    const deleteHandler = () => {
        props.deleteHandler(task.id)
    }

    const updateStatusHandler = () => {
        setCompleted(!completed);
        props.updateStatusHandler(task.taskIndex, !completed)
    }
    let dueDate = moment(task.dueDate);
    dueDate = dueDate.isValid() ? dueDate.format(`h:mm A  dddd, MMM Do, YYYY `) : '';
    return (
        <div>
            <Card className={classes.root} variant="outlined" raised>
                <CardActionArea onClick={openEditDialog} classes={{ focusVisible: classes.cardActionArea, focusHighlight: classes.cardActionArea }}>
                    <CardContent>
                        <Typography className={classes.title} color="textPrimary" >
                            {task.taskName}
                        </Typography>
                        <Typography className={classes.date} color="textSecondary" gutterBottom>
                            {dueDate}
                        </Typography>
                        <Divider />
                        <Box mt={1} />
                        <Typography color="primary" gutterBottom variant="body2" component="p">
                            {styleLabels(task.labels)}
                        </Typography>
                        <Typography className={classes.description} color="textSecondary" >
                            {task.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Box mt={-2} />
                <CardActions>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Box ml={1}>
                            <FormControlLabel
                                classes={{ label: classes.formControlLabel }}
                                control={<GreenCheckbox checked={completed} onChange={updateStatusHandler} name="checkedG" />}
                                label="Mark as completed"
                            />
                        </Box>
                        <IconButton onClick={deleteHandler} classes={{ root: classes.iconButton }}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </CardActions>
            </Card>
            <EditTaskDialog taskIndex={props.taskIndex} task={task} closeDialogHandler={closeEditDialog} open={open} updateHandler={props.updateHandler} />
        </div>
    );
}
