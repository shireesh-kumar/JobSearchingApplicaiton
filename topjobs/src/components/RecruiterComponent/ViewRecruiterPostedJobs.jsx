import axios from 'axios'
import React, { Component } from 'react'
import ViewRecruiterJobsCard from "./cards/ViewRecruiterJobsCard";
import JobPostEditForm from "./JobPostEditForm.jsx";


export default class ViewRecruiterPostedJobs extends Component {

    state={
        recruiterPosts : null,
        r_ID : 'T',
        editPage : 0,
        editData : null
    }

    changeViewStateHere = (value1,value2)=>{
        this.setState({editPage:value2 , editData:value1});
    }

    componentDidMount(){
        //code to fetch the current recruiter id

        axios.get("http://localhost:53928/JobPosting")
        .then(res=>{this.setState({recruiterPosts : res.data})})
        .catch(err=>console.log(err));
    }

    editFunction = ()=>{
        if(this.state.editPage === 0 || this.state.editData === null){return null}
        else{
            // console.log(this.state.editData);
            return <JobPostEditForm data={this.state.editData}  toggle={this.changeViewStateHere.bind(this) }/>;
        }
    }

    render() {

        return (
            <div>
                {this.editFunction()}
                <br/>
                    { this.state.editPage === 0 ? ViewRecruiterJobsCard(this.state.recruiterPosts , this.state.r_ID , this.changeViewStateHere.bind(this) ) : null}
            </div>
        )
    }
}
