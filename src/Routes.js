import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

const Auth = lazy(() => import('./view/Auth'));
const Register = lazy(() => import('./view/Register'));
const Vehicles = lazy(() => import('./view/Vehicles'));

const  Routes = () => (
    <Router>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress/> </div>}>
            <Switch>
                <Route exact path="/vehicles" component={Vehicles} />
                <Route path="/login" component={Auth} />
                <Route path="/register" component={Register} />
                <Route exact path="/" component={Auth} />
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;