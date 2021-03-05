import React , { useState, useEffect }from 'react'
import './Resume.css'
import axios from 'axios';

export default function Resume() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [summary, setSummary] = useState('')
    const [qualification, setQualification] = useState('')
    const [percentage, setPercentage] = useState('')
    const [primaryskill, setPrimaryskill] = useState('')
    const [secondaryskill, setSecondaryskill] = useState('')
    const [experience, setExperience] = useState('')
    const [jobSeekers, setJobSeekers] = useState([])

    const saveChanges = async (e) => {
        e.preventDefault();

        await axios.put('http://localhost:55045/api/JobSeekers/J001', {
            name: name,
            email: email,
            summary: summary,
            qualification: qualification,
            percentage: parseFloat(percentage),
            primarySkill: primaryskill,
            secondarySkill: secondaryskill,
            experienceYears: parseInt(experience)
        })
        .then(response => {
            console.log(response);
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });

        setName('')
        setEmail('')
        setSummary('')
        setQualification('')
        setPercentage('')
        setPrimaryskill('')
        setSecondaryskill('')
        setExperience('')

        window.location.reload();

        document.getElementById("mySelect").disabled=true;
        document.getElementById("mySelect").disabled=true;
        document.getElementById("mySelect1").disabled=true;
        document.getElementById("mySelect2").disabled=true;
        document.getElementById("mySelect3").disabled=true;
        document.getElementById("mySelect4").disabled=true;
        document.getElementById("mySelect5").disabled=true;
        document.getElementById("mySelect6").disabled=true;
        document.getElementById("mySelect7").disabled=true;
        
    }

    const updateResume =  async (e) => {
        e.preventDefault();
        document.getElementById("mySelect").disabled=false;
        document.getElementById("mySelect1").disabled=false;
        document.getElementById("mySelect2").disabled=false;
        document.getElementById("mySelect3").disabled=false;
        document.getElementById("mySelect4").disabled=false;
        document.getElementById("mySelect5").disabled=false;
        document.getElementById("mySelect6").disabled=false;
        document.getElementById("mySelect7").disabled=false;
    }

    useEffect(() => {
        axios.get('http://localhost:55045/api/JobSeekers')
        .then(response => setJobSeekers(response.data));
    },[]);

    return (
        <div align="align-self-center">
            <div className="card shadow-lg mt-5 addFormContainer">
                <div className="card-body" align="center">
                    {
                        jobSeekers.map(item=>
                    <form onSubmit={saveChanges}>
                        <div className="form-group">
                            <label className="col-3 formLabel">Name :</label>
                            <input type="text" id="mySelect" disabled className="w-50 mt-4 mb-2 formInput " placeholder={item.name}
                                onChange={e => setName(e.target.value)} value={name} required  />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Email :</label>
                            <input type="email" id="mySelect1" disabled className="w-50 mt-4 mb-2 formInput" placeholder={item.email}
                                onChange={e => setEmail(e.target.value)} value={email} required />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Summary :</label>
                            <input type="text" id="mySelect2" disabled className="w-50 mt-4 mb-2 formInput" placeholder={item.summary}
                                onChange={e => setSummary(e.target.value)} value={summary} required />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Qualification :</label>
                            <input type="text" id="mySelect3" disabled className="w-50 mt-4 mb-2 formInput" placeholder={item.qualification}
                                onChange={e => setQualification(e.target.value)} value={qualification} required />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Percentage :</label>
                            <input type="number" id="mySelect4" disabled className="w-50 mt-4 mb-2 formInput" placeholder={item.percentage}
                                onChange={e => setPercentage(e.target.value)} value={percentage} required />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Primary skills :</label>
                            <input type="text" id="mySelect5" disabled className="w-50 mt-4 mb-2 formInput" placeholder={item.primarySkill}
                                onChange={e => setPrimaryskill(e.target.value)} value={primaryskill} required />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Secondary skills :</label>
                            <input type="text" id="mySelect6" disabled className="w-50 mt-4 mb-2 formInput" placeholder={item.secondarySkill}
                                onChange={e => setSecondaryskill(e.target.value)} value={secondaryskill} required />
                        </div>
                        <div className="form-group">
                            <label className="col-3 formLabel">Experience :</label>
                            <input type="number" id="mySelect7" disabled className="w-50 mt-4 mb-2 formInput" placeholder={item.experienceYears}
                                onChange={e => setExperience(e.target.value)} value={experience} required  />
                        </div>
                        <div className="p-3">
                            <input id="saveChanges" type="submit" value="Save Changes" className="btn btn-primary m-5" />
                            <input id="updateResume" type="submit" value="Edit" className="btn btn-success m-5" onClick={updateResume}/>
                        </div>
                    </form>
                        )}
                </div>
            </div>
        </div>
    )
}
