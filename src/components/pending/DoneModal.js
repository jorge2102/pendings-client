import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DoneModal = ({ item, show, close, actionItem }) => {

  const confirm = () => {
    actionItem(item);
    close();
  };

  return (
    <>
      <Dialog
        open={show}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Done!
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Have you done your task: <b>{item.description}</b>?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button color="secondary" onClick={confirm} >Yes</Button>
          <Button onClick={close}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DoneModal;