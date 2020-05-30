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
    const { onDuedateChange, onLabelsChange, onDescriptionChange } = props;
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <FormControl className={classes.formControl} >
                    <TextField
                        id="datetime-local"
                        variant="outlined"
                        margin="dense"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        color="primary"
                        label="Description"
                        placeholder=""
                        multiline
                        inputProps={{ maxLength: 500 }}
                        rows={3}
                        helperText="Maximum 500 characters"
                        onChange={(e, value) => onDescriptionChange(e.target.value)}
                    />
                </FormControl>
            </Grid>
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
                        onChange={(e, value) => { console.log(value); return onDuedateChange(e.target.value) }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                    <LabelSelect onChangeHandler={onLabelsChange} />
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default AdditionalTaskDetailsInput;