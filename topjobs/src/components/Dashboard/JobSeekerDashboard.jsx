import React from 'react'
import SearchHeader from './../Header/SearchHeader';

export default function JobSeekerDashboard() {
    return (
        <div>
            <SearchHeader title="TopJobs" />
            <div className="container-fluid">
                <ul class="nav nav-tabs" id="jobSeekerTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="resume-tab" data-bs-toggle="tab" data-bs-target="#resume" type="button" role="tab" aria-controls="resume" aria-selected="true">My Resume</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="postings-tab" data-bs-toggle="tab" data-bs-target="#postings" type="button" role="tab" aria-controls="postings" aria-selected="false">Job Postings</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="applications-tab" data-bs-toggle="tab" data-bs-target="#applications" type="button" role="tab" aria-controls="applications" aria-selected="false">My Applications</button>
                    </li>
                </ul>
                <div class="tab-content" id="jobSeekerTabContent">
                    <div class="tab-pane fade show active" id="resume" role="tabpanel" aria-labelledby="resume-tab">Sample resume content</div>
                    <div class="tab-pane fade" id="postings" role="tabpanel" aria-labelledby="postings-tab">Sample job postings content</div>
                    <div class="tab-pane fade" id="applications" role="tabpanel" aria-labelledby="applications-tab">Sample job applications content</div>
                </div>
            </div>
        </div>
    )
}
