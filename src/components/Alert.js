import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Typography } from '@material-ui/core';
import { MdError,MdCheckCircle } from 'react-icons/md';

export default function Alert() {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.AlertReducer);

    if(alert.open) {
        setTimeout(() => dispatch({ type: 'SET_ALERT', payload: {open: false}}), alert.time)
    }

    return (
        <Modal
            open={alert.open}
            onClose={() => dispatch({type: 'SET_ALERT', payload: {open:false} }) }
            className="d-flex flex-column align-items-center justify-content-center h-100"
        >
            <div className="bg-white rounded d-flex align-items-center p-4">
                {(alert.class === 'success') &&
                    <MdCheckCircle style={{fontSize: '2.5rem'}} className="me-3 text-success" />
                }
                {(alert.class === 'error') &&
                    <MdError style={{fontSize: '2.5rem'}} className="me-3 text-danger" />
                }
                <Typography className="font-weight-bold" variant="subtitle2">{alert.msg}</Typography>
            </div>
        </Modal>
    )
}
