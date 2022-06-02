import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@mui/material';
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {Auth} from '../App'


export default function LinkToChangePassword({open, setOpen}) {

  const handleClose = () => setOpen(false);
  const nav = useNavigate();

  const {changePasswordEmail} = useContext(Auth)


  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
            {changePasswordEmail} Email confirmed!.
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                Email confirmed! You can now change your password by clicking on the link below.
            </DialogContentText>
            <Typography variant="h6" onClick={()=>nav('/change-password')} color='blue' sx={{cursor: 'pointer', textDecoration: 'underline'}}>
               Change Password {changePasswordEmail}
            </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
