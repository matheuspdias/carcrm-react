import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Api from '../../Api';

export default function Auth() {
    const dispatch = useDispatch();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleLogin = async () => {
        dispatch({type: 'SET_LOADING', payload: {open:true} });
        dispatch({type: 'SET_MSG_LOADING', payload: {msg:'Authenticando'} });

        let res = await Api.login(emailField, passwordField);

        if(res.error === '') {    
            localStorage.setItem('token', res.token);
            dispatch({type: 'SET_TOKEN', payload: {token: res.token } });
            <Redirect to="/vehicles" />
        } else {            
            dispatch({type: 'SET_NOTIFY', payload: {open:true} });
            dispatch({type: 'SET_CLASS', payload: {class:'error'} });
            dispatch({type: 'SET_MSG_NOTIFY', payload: {msg: res.error} })
        }
        dispatch({type: 'SET_LOADING', payload: {open:false} });
    }

    return (
        <div className="d-flex bg-white min-vh-100">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="form-group text-center">
                            <img src="/logo.png" alt="CAR CRM" height="48" />
                            <Typography className="mt-3" variant="h6" component="h1">Plataforma para revenda de veiculos</Typography>
                        </div>
                        <TextField
                            label="Email"
                            type="email"
                            autoComplete="email"
                            margin="normal"
                            value={emailField}
                            onChange={t=> setEmailField(t.target.value)}
                        />

                        <TextField
                            label="Senha"
                            type="password"
                            margin="normal"
                            value={passwordField}
                            onChange={t=> setPasswordField(t.target.value)}
                        />

                        <Button 
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            className="mt-4 mb-4"
                            onClick={handleLogin}
                        >
                            Entrar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
