using JobApplicationAPI.Models;
using System.Collections.Generic;

namespace JobApplicationAPI.Interfaces
{
    public interface IJobApplicationService
    {
        JobApplication AddJobApplication(JobApplication application);
        JobApplication DeleteJobApplication(int id);
        List<JobApplication> GetJobApplications();
        JobApplication GetJobApplication(int id);
        bool UpdateJobApplication(int id, JobApplication application);
    }
}
