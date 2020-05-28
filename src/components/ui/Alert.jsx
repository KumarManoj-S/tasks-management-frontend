import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function GrowTransition(props) {
    return <Grow {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const CustomizedSnackbars = (props) => {
    const classes = useStyles();
    const { open, handleClose = () => { }, message } = props;

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} TransitionComponent={GrowTransition}>
                <Alert onClose={handleClose} severity="success">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default CustomizedSnackbars; 
