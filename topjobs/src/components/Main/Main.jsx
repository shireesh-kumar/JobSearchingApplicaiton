import React, { Component } from 'react'
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import JobSeekerLogin from './../Login/JobSeekerLogin';
import RecruiterLogin from './../Login/RecruiterLogin';
import JobSeekerRegister from './../Register/JobSeekerRegister';
import RecruiterRegister from './../Register/RecruiterRegister';
import PageNotFound from './../PageNotFound/PageNotFound';
import Home from './../Home/Home';

export default class Main extends Component {
    render() {
        return (
            <div>
                <main className="mymain">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/JobSeekerLogin" component={JobSeekerLogin} />
                        <Route exact path="/RecruiterLogin" component={RecruiterLogin} />
                        <Route exact path="/JobSeekerRegister" component={JobSeekerRegister} />
                        <Route exact path="/RecruiterRegister" component={RecruiterRegister} />
                        <Route component={PageNotFound} />
                    </Switch>
                </main>
            </div>
        )
    }
}