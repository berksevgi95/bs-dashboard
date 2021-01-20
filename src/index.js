import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Nav from './components/nav/Nav';
import Home from './views/home/Home';
import Dashboard from './views/dashboard/Dashboard';

import './styles.css'

const App = () => {

    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
