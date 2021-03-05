import axios from 'axios';
import React, { Component } from 'react'

export default class JobPostEditForm extends Component {

    componentDidMount(){
        this.setState({ jP_ID:this.props.data['jP_ID'],jobTitle:this.props.data['jobTitle'],jobDescription:this.props.data['jobDescription'] , location : this.props.data['location'] ,primarySkill:this.props.data['primarySkill'],  secondarySkill:this.props.data['secondarySkill'], category:this.props.data['category'],r_ID:this.props.data['r_ID'], hiringOrganization:this.props.data['hiringOrganization'] , salary:this.props.data['salary'] ,requiredQualification:this.props.data['requiredQualification'] , experienceInYears : this.props.data['experienceInYears'],togglefunc:this.props.toggle})
    }
    state={
        jP_ID : "",
        togglefunc:null,
        jobTitle : "",
        jobDescription : "",
        location : "",
        primarySkill : "",
        secondarySkill : "",
        hiringOrganization : "",
        requiredQualification :"",
        salary : "",
        category:"",
        experienceInYears : "",
        r_ID:""

    }

    postEditedData =(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.put(`http://localhost:53928/JobPosting/${this.state.jP_ID}`,{
                jP_ID : this.state.jP_ID,
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
                r_ID : this.state.r_ID,
                approved: this.props.data['approved'],
                closed: this.props.data['closed']
        })
        .then(res=>{
            console.log(res);
            alert("Post Updated Successfully");
            window.location.reload();
        })
        .catch(err=>console.log(err));
    }

    render() {
        return (
            <div>
                <div className="jobpostrecruiter container col-lg-6">
                        <form id="btnsubmit" className="jobpost_form" onSubmit={(e)=>{this.postEditedData(e)}}>
                            <h4 style={{textAlign:"center"}}>JOB POSTING FORM</h4>
                            <div className="form-group">
                                <label htmlFor="title">Job Title</label>
                                <input type="text" value={this.state.jobTitle} className="form-control" onChange={(e)=>{this.setState({jobTitle:e.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <label>Job Description</label>
                                <input type="text" value={this.state.jobDescription} className="form-control" onChange={(e)=>{this.setState({jobDescription:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>Salary</label>
                                <input type="text" value={this.state.salary} className="form-control" onChange={(e)=>{this.setState({salary: e.target.value })}}/>
                            </div>
                            <div className="form-group">
                                <label>Location</label>
                                <input type="text" value={this.state.location} className="form-control" onChange={(e)=>{this.setState({location:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>RequiredQualification</label>
                                <input type="text" value={this.state.requiredQualification} className="form-control" onChange={(e)=>{this.setState({requiredQualification:e.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <label>PrimarySkill</label>
                                <input type="text" value={this.state.primarySkill} className="form-control" onChange={(e)=>{this.setState({primarySkill:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>Secondary Skill</label>
                                <input type="text" value={this.state.secondarySkill} className="form-control" onChange={(e)=>{this.setState({secondarySkill:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>ExperienceInYears</label>
                                <input type="text" value={this.state.experienceInYears} className="form-control" onChange={(e)=>{this.setState({experienceInYears: e.target.value})}}/>
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input type="text" value={this.state.category} className="form-control" onChange={(e)=>{this.setState({category:e.target.value})}} />
                            </div>
                            <button style={{marginTop:"10px"}} type="submit" className="btn btn-dark">Edit Post</button>
                            <button style={{marginTop:"10px" , marginLeft:"10px"}} type="submit" className="btn btn-dark" onClick={()=>{window.location.reload()}}>Close Edit</button>


                        </form>
                    </div>
            </div>
        )
    }
}
