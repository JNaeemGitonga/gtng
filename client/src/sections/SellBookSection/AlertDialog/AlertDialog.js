import React from 'react';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContentText from '@material-ui/core/DialogContentText';

import styles from './AlertDialog.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});

const AlertDialog = props => {
    const {
        open,
        toggleOpen,
        dialogText,
        isSpinning,
        dialogTitle 
    } = props;
    return (
        <div>
            <Dialog
                open={ open }
                TransitionComponent={ Transition }
                keepMounted
                aria-labelledby='alert-dialog-slide-title'
                aria-describedby='alert-dialog-slide-description'
            >
                <DialogActions className={ styles.dialogActions }>
                    <Button onClick={ toggleOpen }>
                        <CloseRoundedIcon/>
                    </Button>      
                </DialogActions>
                <DialogTitle id='alert-dialog-slide-title' className={ styles.dialogTitle }>
                    { dialogTitle }
                </DialogTitle>
                <DialogContent className={ styles.dialogContent }>
                    {
                        isSpinning && (<CircularProgress className={ styles.circularProgress } />)
                    }
                    <DialogContentText id='alert-dialog-slide-description' className={ styles.dialogText }>
                        { dialogText }
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div> 
    );
};

export default AlertDialog;