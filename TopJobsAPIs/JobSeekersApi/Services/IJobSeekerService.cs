using JobSeekersApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSeekersApi.Services
{
    public interface IJobSeekerService
    {
        JobSeekers AddJobSeeker(JobSeekers js);
        JobSeekers GetJobSeekerById(string id);
        List<JobSeekers> GetJobSeeker();
        bool UpdateJobSeeker(string id, JobSeekers js);
        bool DeleteJobSeeker(string id);
    }
}
