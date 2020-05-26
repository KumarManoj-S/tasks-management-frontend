import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import LabelSelect from './LabelSelect';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
    }
}));

const AdditionalTaskDetailsInput = (props) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <FormControl className={classes.formControl} >
                    <TextField
                        id="datetime-local"
                        type="datetime-local"
                        variant="outlined"
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        color="primary"
                        label="Due date"
                        placeholder="Select Due date"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                    <LabelSelect />
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default AdditionalTaskDetailsInput;