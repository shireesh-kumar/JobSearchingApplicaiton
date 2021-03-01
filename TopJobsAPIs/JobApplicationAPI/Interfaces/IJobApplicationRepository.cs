using JobApplicationAPI.Models;
using System.Collections.Generic;

namespace JobApplicationAPI.Interfaces
{
    public interface IJobApplicationRepository
    {
        JobApplication AddJobApplication(JobApplication application);
        JobApplication DeleteJobApplication(int id);
        JobApplication GetJobApplication(int id);
        List<JobApplication> GetJobApplications();
        byte UpdateJobApplication(int id, JobApplication application);
    }
}
