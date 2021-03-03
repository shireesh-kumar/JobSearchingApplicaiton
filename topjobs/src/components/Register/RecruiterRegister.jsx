import React, { useState } from 'react'
import './Register.css'
import HomeHeader from './../Header/HomeHeader';

export default function RecruiterRegister() {
    const [name, setName] = useState('')
    const [org, setOrg] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const RegisterHandler = (e) => {
        e.preventDefault();

        setName('')
        setOrg('')
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
                            <label className="col-3 formLabel">Organization</label>
                            <input type="text" className="w-50 mt-4 formInput" placeholder="TopJobs"
                                onChange={e => setOrg(e.target.value)} value={org} required />
                        </div>
                        <div className="form-group text-left">
                            <label className="col-3 formLabel">Email</label>
                            <input type="text" className="w-50 mt-4 formInput" placeholder="recruiter@email.com"
                                onChange={e => setEmail(e.target.value)} value={email}
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
                    </form>
                </div>
            </div>
        </div>
    )
}
