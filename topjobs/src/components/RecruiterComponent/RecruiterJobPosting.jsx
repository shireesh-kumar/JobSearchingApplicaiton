import React, { Component } from 'react'
import "../RecruiterComponent/RecruiterJobPost.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';


export default class RecruiterJobPosting extends Component {


        componentDidMount(){
     }

        state={
            actionValue:0,
            jobTitle : "",
            jobDescription : "",
            location : "",
            primarySkill : "",
            secondarySkill : "",
            hiringOrganization : "",
            requiredQualification :"",
            salary : "",
            category:"",
            experienceInYears : ""

        }
        // notify = () => toast("Wow so easy!");

        addJobPostByRecruiter = (e)=>{
            let r_ID = "T";
            //code to fetch the current recruiter logged 

            e.preventDefault();

            axios.post("http://localhost:53928/JobPosting",{
                jobTitle:this.state.jobTitle,
                jobDescription : this.state.jobDescription,
                location : this.state.location,
                primarySkill : this.state.primarySkill,
                secondarySkill : this.state.secondarySkill,
                hiringOrganization : this.state.hiringOrganization,
                requiredQualification :this.state.requiredQualification,
                salary : parseFloat(this.state.salary),
                category:this.state.category,
                experienceInYears : parseInt(this.state.experienceInYears),
                r_ID : r_ID
            })
            .then((res)=>{ console.log(res) ;   let frm = document.getElementById('btnsubmit'); frm.reset(); window.scrollTo(0, 0);
            toast("Yes Job Post Added Successfully");})
            .catch(err=>console.log(err));
        }
        render() {
            return (
                <div>
                    <div className="jobpostrecruiter container col-lg-6">
                        <form id="btnsubmit" className="jobpost_form" onSubmit={(e)=>{this.addJobPostByRecruiter(e)}}>
                            <h4 style={{textAlign:"center"}}>JOB POSTING FORM</h4>
                            <div className="form-group">
                                <label htmlFor="title">Job Title</label>
                                <input type="text" className="form-control" onChange={(e)=>{this.setState({jobTitle:e.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <label>Job Description</label>
                                <input type="text" className="form-control" onChange={(e)=>{this.setState({jobDescription:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>Salary</label>
                                <input type="text" className="form-control" onChange={(e)=>{this.setState({salary:e.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" className="form-control" onChange={(e)=>{this.setState({location:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>RequiredQualification</label>
                                <input type="text" className="form-control" onChange={(e)=>{this.setState({requiredQualification:e.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <label>PrimarySkill</label>
                                <input type="text" className="form-control" onChange={(e)=>{this.setState({primarySkill:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>Secondary Skill</label>
                                <input type="text" className="form-control" onChange={(e)=>{this.setState({secondarySkill:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>ExperienceInYears</label>
                                <input type="text" className="form-control" onChange={(e)=>{this.setState({experienceInYears:e.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input type="text" className="form-control" onChange={(e)=>{this.setState({category:e.target.value})}} />
                            </div>
                            <button style={{marginTop:"10px"}} type="submit" className="btn btn-dark">Add Post</button>

                        </form>
                        <ToastContainer/>
                    </div>
                    <br></br>
                </div>
            )
        }
    }
