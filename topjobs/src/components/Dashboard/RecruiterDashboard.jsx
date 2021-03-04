import React from 'react'
import SearchHeader from './../Header/SearchHeader';

export default function RecruiterDashboard() {
    return (
        <div>
            <SearchHeader title="TopJobs" />
            <div className="container-fluid">
                <ul class="nav nav-tabs" id="recruiterTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="addPosting-tab" data-bs-toggle="tab" data-bs-target="#addPosting" type="button" role="tab" aria-controls="addPosting" aria-selected="true">Add Job Posting</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="viewPostings-tab" data-bs-toggle="tab" data-bs-target="#viewPostings" type="button" role="tab" aria-controls="viewPostings" aria-selected="false">View My Job Postings</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="applications-tab" data-bs-toggle="tab" data-bs-target="#applications" type="button" role="tab" aria-controls="applications" aria-selected="false">Job Applications Received</button>
                    </li>
                </ul>
                <div class="tab-content" id="recruiterTabContent">
                    <div class="tab-pane fade show active" id="addPosting" role="tabpanel" aria-labelledby="addPosting-tab">Sample add job posting content</div>
                    <div class="tab-pane fade" id="viewPostings" role="tabpanel" aria-labelledby="viewPostings-tab">Sample view job postings content</div>
                    <div class="tab-pane fade" id="applications" role="tabpanel" aria-labelledby="applications-tab">Sample job applications received content</div>
                </div>
            </div>
        </div>
    )
}
