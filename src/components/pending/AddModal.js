import React, { useState } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const AddModal = ({ show, close, actionItem }) => {
    const [pendingDescription, setPendingDescription] = useState('');

    const confirm = () => {
        actionItem({
            description: pendingDescription
        });

        close();
        setPendingDescription('');
    };

    const changeDescription = (e) => {
        const { value } = e.target;
        setPendingDescription(value);
    };

    return (
        <>
            <Dialog
                open={show}
                onClose={close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
            >
                <DialogTitle id="alert-dialog-title">
                    Create pending
                </DialogTitle>

                <DialogContent>
                    <TextField
                        required
                        id="pending-description"
                        label="Pending"
                        variant="outlined"
                        onChange={(e) => changeDescription(e)}
                        value={pendingDescription}
                        style={{ width: 600 }}
                    />
                </DialogContent>

                <DialogActions>
                    <Button color="secondary" onClick={confirm}>Save</Button>
                    <Button onClick={close}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddModal;