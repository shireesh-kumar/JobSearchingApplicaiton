import React from 'react'
import DashboardHeader from './../Header/DashboardHeader';
import Resume from './../Resume/Resume';
import ViewJobPosts from './../JobPostingComponent/ViewJobPosts';

export default function JobSeekerDashboard() {
    function ShowSearchBar() {
        document.getElementById("dashboardCategories").style.display = "block"
        document.getElementById("searchInput").style.display = "block"
        document.getElementById("searchButton").style.display = "block"
    }

    function HideSearchBar() {
        document.getElementById("dashboardCategories").style.display = "none"
        document.getElementById("searchInput").style.display = "none"
        document.getElementById("searchButton").style.display = "none"
    }

    return (
        <div>
            <DashboardHeader title="TopJobs" />
            <div className="container-fluid">
                <ul className="nav nav-tabs" id="jobSeekerTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button onClick={HideSearchBar} className="nav-link active" id="resume-tab" data-bs-toggle="tab" data-bs-target="#resume" type="button" role="tab" aria-controls="resume" aria-selected="true">My Resume</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button onClick={ShowSearchBar} className="nav-link" id="postings-tab" data-bs-toggle="tab" data-bs-target="#postings" type="button" role="tab" aria-controls="postings" aria-selected="false">Job Postings</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button onClick={HideSearchBar} className="nav-link" id="applications-tab" data-bs-toggle="tab" data-bs-target="#applications" type="button" role="tab" aria-controls="applications" aria-selected="false">My Applications</button>
                    </li>
                </ul>
                <div className="tab-content" id="jobSeekerTabContent">
                    <div className="tab-pane fade show active" id="resume" role="tabpanel" aria-labelledby="resume-tab">
                        <Resume />
                    </div>
                    <div className="tab-pane fade" id="postings" role="tabpanel" aria-labelledby="postings-tab">
                        <ViewJobPosts loggedIn={1} />
                    </div>
                    <div className="tab-pane fade" id="applications" role="tabpanel" aria-labelledby="applications-tab">Sample job applications content</div>
                </div>
            </div>
        </div>
    )
}
