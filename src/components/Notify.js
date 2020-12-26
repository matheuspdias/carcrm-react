import React from 'react'
import { Snackbar, SnackbarContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    success: {
        backgroundColor: green[500]
    },
    error: {
        backgroundColor: red[600]
    }
})

export default function Notify() {
    const dispatch = useDispatch();
    const notify = useSelector(state => state.NotifyReducer);
    const classes = useStyles();

    return (
        <Snackbar 
            anchorOrigin={{
                horizontal: notify.horizontal,
                vertical: notify.vertical
            }}
            open={notify.open}
            autoHideDuration={notify.time}
            onClose={() => dispatch({type: 'SET_NOTIFY', payload: {open: false}}) }
        >
            <SnackbarContent 
                className={classes[notify.class] + ' d-flex justify-content-center'}
                message={
                    <span className="d-flex align-items-center">{notify.msg}</span>
                }
            />

        </Snackbar>
    )
}
