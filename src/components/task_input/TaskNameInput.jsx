import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
    }
}));

const TaskNameInput = (props) => {
    const classes = useStyles();
    return (
        (
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl} >
                        <TextField id="standard-required" placeholder="Add a new task..." />
                    </FormControl>
                </Grid>
            </Grid>
        )
    )
}

export default TaskNameInput;