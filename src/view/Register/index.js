import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Api from '../../Api';

export default function Register() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [errors, setErrors] = useState([]);

    const handleRegister = async () => {
        dispatch({type: 'SET_LOADING', payload: {open:true} });
        dispatch({type: 'SET_MSG_LOADING', payload: {msg:'Cadastrando'} });

        let res = await Api.register(nameField, emailField, passwordField);

        if(res.error === '') {    
            localStorage.setItem('token', res.token);
            dispatch({type: 'SET_TOKEN', payload: {token: res.token } });

            dispatch({type: 'SET_NOTIFY', payload: {open:true} });
            dispatch({type: 'SET_CLASS', payload: {class:'success'} });
            dispatch({type: 'SET_MSG_NOTIFY', payload: {msg: 'Usuário cadastrado com sucesso.'} })
            history.replace('/vehicles');
        } else {   
            setErrors(res.error);
            /*         
            dispatch({type: 'SET_NOTIFY', payload: {open:true} });
            dispatch({type: 'SET_CLASS', payload: {class:'error'} });
            dispatch({type: 'SET_MSG_NOTIFY', payload: {msg: res.error.name} });
            */
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
                            <Typography className="mt-3" variant="h6" component="h1">Crie sua conta, teste grátis!</Typography>
                        </div>
                        <TextField
                            error={(errors.name) && true}
                            label="Nome"
                            type="text"
                            margin="normal"
                            variant="standard"
                            value={nameField}
                            onChange={t=> {setNameField(t.target.value); if(errors.name) {delete errors.name}}}
                        />
                        {(errors.name) &&
                            <strong className="text-danger">{errors.name[0]}</strong>
                        }

                        <TextField
                            error={(errors.email) && true}
                            label="Email"
                            type="email"
                            autoComplete="email"
                            margin="normal"
                            variant="standard"
                            value={emailField}
                            onChange={t=> {setEmailField(t.target.value); if(errors.email) {delete errors.email}}}
                        />
                        {(errors.email) &&
                            <strong className="text-danger">{errors.email[0]}</strong>
                        }

                        <TextField
                            error={(errors.name) && true}
                            label="Senha"
                            type="password"
                            margin="normal"
                            variant="standard"
                            value={passwordField}
                            onChange={t=> {setPasswordField(t.target.value); if(errors.password) {delete errors.password}}}
                        />
                        {(errors.password) &&
                            <strong className="text-danger">{errors.password[0]}</strong>
                        }

                        <Button 
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            className="mt-4 mb-4"
                            onClick={handleRegister}
                        >
                            Cadastrar
                        </Button>

                        <div className="text-center">
                            <Link to="/login" className="mt-4 text-danger">
                                Fazer Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
