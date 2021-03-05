import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchlessHeader from './../Header/SearchlessHeader';

export default function RecruiterLogin(props) {
    const [email, setEmail] = useState([''])
    const [password, setPassword] = useState([''])

    async function LoginHandler(e) {
        e.preventDefault()

        let statusCode
        let loginResponse

        await axios.post('http://localhost:59962/users/login', {
            email: email,
            password: password,
            role: 2
        }).then(async response => {
            statusCode = response.status
            loginResponse = await response.data
        }).catch(async error => {
            if (error.response) {
                statusCode = await error.response.status
            } else {
                statusCode = await error.message
            }
        })

        if (statusCode === 200) {
            localStorage.setItem('topJobsToken', JSON.stringify(loginResponse.token))
            localStorage.setItem('topJobsRole', JSON.stringify(2))
            props.history.push("/RecruiterDashboard")
        }
        else if (statusCode === 401) {
            alert("Invalid username or password.")
        }
        else {
            alert("Internal server error occured.")
        }

        setEmail('')
        setPassword('')
    }

    return (
        <div className="d-flex flex-column" id="mainLoginContainer">
            <SearchlessHeader title="TopJobs" />
            <div id="loginFormContainer" className="card shadow-lg align-self-center">
                <div className="card-body" align="center">
                    <form onSubmit={LoginHandler}>
                        <div className="form-group text-left">
                            <label className="col-3 formLabel">Email</label>
                            <input type="text" className="w-50 mt-4 formInput" placeholder="recruiter@email.com"
                                onChange={e => setEmail(e.target.value.toLowerCase())} value={email} required />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Password</label>
                            <input type="password" className="w-50 mt-4 formInput" placeholder="password"
                                onChange={e => setPassword(e.target.value)} value={password} required />
                        </div>
                        <div className="p-3">
                            <input id="loginButton" type="submit" value="Login" className="btn btn-dark" />
                        </div>
                        <Link id="registerLink" to="/RecruiterRegister"><div>Don't have an account? Register</div></Link>
                        <Link id="registerLink" to="/JobSeekerLogin"><div>Are you a job seeker? Login here</div></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
