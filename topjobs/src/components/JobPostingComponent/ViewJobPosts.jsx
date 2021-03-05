import React, { Component } from 'react'
import axios from 'axios';
import Jobpostcard from "./cards/jobpostcard";
import "../JobPostingComponent/ViewJobPosts.css";

export default class ViewJobPosts extends Component {
    state = {
        contentOfJobPosts: null,
        contentOfApplicantPosts: null
    }

    componentDidMount() {
        const jobPost = axios.get("http://localhost:53928/api/JobPosting");
        const appPost = axios.get("http://localhost:51055/api/jobapplications");
        axios
            .all([jobPost, appPost])
            .then(
                axios.spread((...responses) => {
                    this.setState({ contentOfJobPosts: responses[0].data, contentOfApplicantPosts: responses[1].data });
                })
            )
    }

    render() {
        return (
            <div className="display-job-cards">
                <div>
                    {Jobpostcard(this.state.contentOfJobPosts, this.props.loggedIn, this.state.contentOfApplicantPosts)}
                </div>
            </div>
        )
    }
}
