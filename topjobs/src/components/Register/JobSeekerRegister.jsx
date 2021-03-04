import React, { useState } from 'react'
import './Register.css'
import HomeHeader from './../Header/HomeHeader';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function JobSeekerRegister() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const RegisterHandler = async (e) => {
        e.preventDefault();

        let id
        let jobSeekers = []
        let statusCode

        await axios.get('http://localhost:55045/api/JobSeekers')
            .then(async response => jobSeekers = await response.data)

        if (jobSeekers === []) {
            id = "JS1"
        }
        else {
            var lastJobSeeker = jobSeekers[jobSeekers.length - 1]
            id = "JS" + (parseInt(lastJobSeeker.jsId.substring(2)) + 1).toString()
        }

        await axios.post('http://localhost:59962/users/register', {
            userId: id,
            name: name,
            email: email,
            password: password,
            role: 1
        }).then(async response => {
            statusCode = response.status
        }).catch(async error => {
            if (error.response) {
                statusCode = await error.response.status
            } else {
                statusCode = await error.message
            }
        })

        if (statusCode === 201) {
            await axios.post('http://localhost:55045/api/JobSeekers', {
                jsId: id,
                name: name,
                email: email,
                summary: "Write a short summary here in less than 200 words.",
                qualification: "Enter qualification.",
                percentage: 0.0,
                primarySkill: "Enter your primary skill here.",
                secondarySkill: "Enter your secondary skill here.",
                experienceYears: 0
            })
            alert("You have been registered successfully!")
        }
        else if (statusCode === 409) {
            alert("Account with this email ID already exists.")
        }
        else {
            alert("Internal server error occured.")
        }

        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className="d-flex flex-column" id="mainRegisterContainer">
            <HomeHeader title="TopJobs" />
            <div id="registerFormContainer" className="card shadow-lg align-self-center">
                <div className="card-body" align="center">
                    <form onSubmit={RegisterHandler}>
                        <div className="form-group text-left">
                            <label className="col-3 formLabel">Name</label>
                            <input type="text" className="w-50 mt-4 formInput" placeholder="John Doe"
                                onChange={e => setName(e.target.value)} value={name} required />
                        </div>
                        <div className="form-group text-left">
                            <label className="col-3 formLabel">Email</label>
                            <input type="text" className="w-50 mt-4 formInput" placeholder="jobseeker@email.com"
                                onChange={e => setEmail(e.target.value.toLowerCase())} value={email}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="Must be of the format example@email.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd" className="col-3 formLabel">Password</label>
                            <input type="password" id="pwd" name="pwd" className="w-50 mt-4 formInput"
                                placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}"
                                title="Must contain at least one number, one uppercase and lowercase letter, one special character (@,#,$,%,^,&,+ or =) and at least 8 or more characters"
                                onChange={e => setPassword(e.target.value)} value={password} required />
                        </div>
                        <div className="p-3">
                            <input id="registerButton" type="submit" value="Register" className="btn btn-dark" />
                        </div>
                        <Link id="loginLink" to="/JobSeekerLogin"><p>Already have an account? Log in</p></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
