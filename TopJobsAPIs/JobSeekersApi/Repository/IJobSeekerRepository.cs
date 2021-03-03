using JobSeekersApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSeekersApi.Repository
{
    public interface IJobSeekerRepository
    {
        JobSeekers AddJobSeeker(JobSeekers js);
        JobSeekers GetJobSeekerById(string id);
        List<JobSeekers> GetJobSeeker();
        bool UpdateJobSeeker(string id, JobSeekers js);
        bool DeleteJobSeeker(string id);
    }
}
