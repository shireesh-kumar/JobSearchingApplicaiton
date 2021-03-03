import React from 'react'
import './Login.css'
import HomeHeader from './../Header/HomeHeader';

export default function RecruiterLogin() {
    return (
        <div className="d-flex flex-column" id="mainLoginContainer">
            <HomeHeader title="TopJobs" />
            <div id="loginFormContainer" className="card shadow-lg align-self-center">
                <div className="card-body" align="center">
                    <form>
                        <div className="form-group text-left">
                            <label className="col-3 formLabel">Email</label>
                            <input type="text" className="w-50 mt-4 formInput" placeholder="recruiter@email.com" required />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Password</label>
                            <input type="password" className="w-50 mt-4 formInput" placeholder="password" required />
                        </div>
                        <div className="p-3">
                            <input id="loginButton" type="submit" value="Login" className="btn btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
