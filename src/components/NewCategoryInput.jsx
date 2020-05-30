import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const NewCategoryInput = (props) => {
    const { open, handleClose, handleCreate } = props;
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="md"
            >
                <DialogTitle id="responsive-dialog-title">{"Please enter a new category"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="category"
                        label="category"
                        type="text"
                        fullWidth
                        autoComplete='off'
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        cancel
                    </Button>
                    <Button onClick={handleCreate} color="primary" >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default NewCategoryInput;
