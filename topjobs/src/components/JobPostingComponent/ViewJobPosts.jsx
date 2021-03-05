import React, { Component } from 'react'
import axios from 'axios';
import Jobpostcard from "./cards/jobpostcard";
import "../JobPostingComponent/ViewJobPosts.css";

export default class ViewJobPosts extends Component {

    state={
        contentOfJobPosts : null,
        contentOfApplicantPosts : null
    }
    componentDidMount(){

        // axios.get("http://localhost:53928/JobPosting")
        // .then(res=> {this.setState({content:res.data}) ; })
        // .catch(error=>console.log(error));
        const jobPost = axios.get("http://localhost:53928/JobPosting");
        const appPost = axios.get("http://localhost:51055/api/jobapplications");
        axios
        .all([jobPost,appPost])
        .then(
            axios.spread((...responses)=>{
                this.setState({contentOfJobPosts:responses[0].data, contentOfApplicantPosts: responses[1].data});
                // console.log(responses[0].data);
            })
        )
    }

   
    render() {
        // if(this.state.content  !== null){console.log(this.state.content[0]["jP_ID"])};
        return (
            <div className="display-job-cards">
                <div>
                    {Jobpostcard(this.state.contentOfJobPosts, this.props.loggedIn , this.state.contentOfApplicantPosts)}
                </div>
            </div>
        )
    }
}
