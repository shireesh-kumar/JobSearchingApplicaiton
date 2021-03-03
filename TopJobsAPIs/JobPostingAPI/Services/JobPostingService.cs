using JobPostingAPI.Exceptions;
using JobPostingAPI.Models;
using JobPostingAPI.Repositories;
using System;
using System.Collections.Generic;

namespace JobPostingAPI.Services
{
    public class JobPostingService : IJobPostingService
    {
        public IJobPostingRepository repo;
        public JobPostingService(IJobPostingRepository _repo)
        {
            repo = _repo;
        }

        public IEnumerable<JobPosting> GetAllData()
        {
            return repo.GetAllData();
        }

        public bool PostData(JobPosting post)
        {
            var result = repo.PostData(post);
            if (result == false)
            {
                throw new JobPostingNotCreatedException();
            }
            return result;
        }

        public bool UpdateData(JobPosting post, int id)
        {


            if (repo.GetDataById(id) != null)
            {
                var result = repo.UpdateData(post, id);

                if (result == 1)
                {
                    return true;
                }
                else if (result == 2)
                {
                    throw new JobPostingUpToDateException();
                }
            }

            throw new JobPostingNotFoundException();
        }

        public bool DeleteById(int jp_id)
        {
            var result = repo.DeleteDataById(jp_id);

            if (result == 0)
            {
                throw new JobPostingNotFoundException();
            }
            else if (result == 1) { return true; }
            else
            {
                throw new Exception();
            }
        }

        public JobPosting GetDataById(int jp_id)
        {
            var result = repo.GetDataById(jp_id);
            if (result != null)
            {
                return result;
            }
            throw new JobPostingNotFoundException();
        }
    }
}
