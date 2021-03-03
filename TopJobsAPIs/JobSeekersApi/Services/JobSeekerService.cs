using JobSeekersApi.Exceptions;
using JobSeekersApi.Models;
using JobSeekersApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSeekersApi.Services
{
    public class JobSeekerService : IJobSeekerService
    {
        private readonly IJobSeekerRepository repo;
        public JobSeekerService(IJobSeekerRepository _repo)
        {
            repo = _repo;
        }
        public JobSeekers AddJobSeeker(JobSeekers jobSeeker)
        {
            return repo.AddJobSeeker(jobSeeker);
        }

        public bool DeleteJobSeeker(string id)
        {
            bool deleted = repo.DeleteJobSeeker(id);
            if (deleted == false)
            {
                throw new JobSeekerNotFoundException($"JobSeeker with id: {id} does not exists");
            }
            else
            {
                return deleted;
            }
        }

        public List<JobSeekers> GetJobSeeker()
        {
            return repo.GetJobSeeker();
        }

        public JobSeekers GetJobSeekerById(string id)
        {
            JobSeekers resume = repo.GetJobSeekerById(id);
            if (resume == null)
            {
                throw new JobSeekerNotFoundException($"JobSeeker with id: {id} does not exists");
            }
            else
            {
                return resume;
            }
        }

        public bool UpdateJobSeeker(string id, JobSeekers jobSeeker)
        {
            bool updated = repo.UpdateJobSeeker(id, jobSeeker);
            if (updated == false)
            {
                throw new JobSeekerNotFoundException($"JobSeeker with id: {id} does not exists");
            }
            else
            {
                return updated;
            }
        }
    }
}


