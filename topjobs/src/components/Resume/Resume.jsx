import React, { useState, useEffect } from 'react'
import './Resume.css'
import axios from 'axios';
import GetUserId from './../../HelperFunctions/GetUserId';

export default function Resume() {
    const [jobSeeker, setJobSeeker] = useState([])

    let jsID
    let token = JSON.parse(localStorage.getItem('topJobsToken'))
    if (token !== null) {
        jsID = String(GetUserId(token));
    }

    useEffect(() => {
        let jsID
        let token = JSON.parse(localStorage.getItem('topJobsToken'))
        if (token !== null) {
            jsID = String(GetUserId(token));
        }
        axios.get(`http://localhost:55045/api/JobSeekers/${jsID}`)
            .then(response => setJobSeeker(response.data));
    }, []);

    const saveChanges = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:55045/api/JobSeekers/${jsID}`, {
            name: document.getElementById("mySelect").value,
            email: jobSeeker.email,
            summary: document.getElementById("mySelect2").value,
            qualification: document.getElementById("mySelect3").value,
            percentage: parseFloat(document.getElementById("mySelect4").value) || 0,
            primarySkill: document.getElementById("mySelect5").value,
            secondarySkill: document.getElementById("mySelect6").value,
            experienceYears: parseFloat(document.getElementById("mySelect7").value || 0)
        })

        document.getElementById("mySelect").disabled = true;
        document.getElementById("mySelect1").disabled = true;
        document.getElementById("mySelect2").disabled = true;
        document.getElementById("mySelect3").disabled = true;
        document.getElementById("mySelect4").disabled = true;
        document.getElementById("mySelect5").disabled = true;
        document.getElementById("mySelect6").disabled = true;
        document.getElementById("mySelect7").disabled = true;
    }

    const updateResume = async (e) => {
        e.preventDefault();
        document.getElementById("mySelect").disabled = false;
        document.getElementById("mySelect2").disabled = false;
        document.getElementById("mySelect3").disabled = false;
        document.getElementById("mySelect4").disabled = false;
        document.getElementById("mySelect5").disabled = false;
        document.getElementById("mySelect6").disabled = false;
        document.getElementById("mySelect7").disabled = false;

        document.getElementById("mySelect").value = jobSeeker.name;
        document.getElementById("mySelect2").value = jobSeeker.summary;
        document.getElementById("mySelect3").value = jobSeeker.qualification;
        document.getElementById("mySelect4").value = jobSeeker.percentage;
        document.getElementById("mySelect5").value = jobSeeker.primarySkill;
        document.getElementById("mySelect6").value = jobSeeker.secondarySkill;
        document.getElementById("mySelect7").value = jobSeeker.experienceYears;
    }

    return (
        <div align="align-self-center">
            <div className="card shadow-lg my-5 addFormContainer">
                <div className="card-body" align="center">
                    <form onSubmit={saveChanges}>
                        <div className="form-group">
                            <label className="col-3 formLabel">Name:</label>
                            <input type="text" id="mySelect" disabled className="w-50 mt-4 mb-2 formInput"
                                placeholder={jobSeeker.name} />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Email:</label>
                            <input type="email" id="mySelect1" disabled className="w-50 mt-4 mb-2 formInput"
                                value={jobSeeker.email} />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Summary:</label>
                            <input type="text" id="mySelect2" disabled className="w-50 mt-4 mb-2 formInput"
                                placeholder={jobSeeker.summary} />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Qualification:</label>
                            <input type="text" id="mySelect3" disabled className="w-50 mt-4 mb-2 formInput"
                                placeholder={jobSeeker.qualification} />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Percentage:</label>
                            <input type="number" id="mySelect4" disabled className="w-50 mt-4 mb-2 formInput"
                                placeholder={jobSeeker.percentage} />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Primary skills:</label>
                            <input type="text" id="mySelect5" disabled className="w-50 mt-4 mb-2 formInput"
                                placeholder={jobSeeker.primarySkill} />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Secondary skills:</label>
                            <input type="text" id="mySelect6" disabled className="w-50 mt-4 mb-2 formInput"
                                placeholder={jobSeeker.secondarySkill} />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Experience:</label>
                            <input type="number" id="mySelect7" disabled className="w-50 mt-4 mb-2 formInput"
                                placeholder={jobSeeker.experienceYears} />
                        </div>
                        <div className="p-3">
                            <input id="saveChanges" type="submit" value="Save Changes" className="btn btn-primary mx-5" />
                            <input id="updateResume" type="submit" value="Edit" className="btn btn-success mx-5" onClick={updateResume} />
                        </div>
                        <div>
                            Your resume has <b>{jobSeeker.resumeViews}</b> views!
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
