using JobSeekersApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSeekersApi.Repository
{
    public class JobSeekerRepository : IJobSeekerRepository
    {
        private readonly TopJobsDBContext db;
        public JobSeekerRepository(TopJobsDBContext _db)
        {
            db = _db;
        }
        public JobSeekers AddJobSeeker(JobSeekers jobSeeker)
        {
            db.JobSeekers.Add(jobSeeker);
            db.SaveChanges();
            return jobSeeker;
        }

        public bool DeleteJobSeeker(string id)
        {
            var pid = db.JobSeekers.Find(id);
            db.JobSeekers.Remove(pid);
            db.SaveChanges();
            if (pid == null)
                return false;
            return true;
        }

        public List<JobSeekers> GetJobSeeker()
        {
            return db.JobSeekers.ToList();
        }

        public JobSeekers GetJobSeekerById(string id)
        {
            var pid = db.JobSeekers.Find(id);
            return pid;
        }

        public bool UpdateJobSeeker(string id, JobSeekers jobSeeker)
        {
            JobSeekers updatejobseeker = db.JobSeekers.ToList().FirstOrDefault(jobSeeker => jobSeeker.JsId == id);
            if (updatejobseeker != default(JobSeekers))
            {
                updatejobseeker.Name = jobSeeker.Name;
                updatejobseeker.Email = jobSeeker.Email;
                updatejobseeker.Percentage = jobSeeker.Percentage;
                updatejobseeker.PrimarySkill = jobSeeker.PrimarySkill;
                updatejobseeker.Qualification = jobSeeker.Qualification;
                if (jobSeeker.ResumeViews != null)
                {
                    updatejobseeker.ResumeViews = jobSeeker.ResumeViews;
                }
                updatejobseeker.SecondarySkill = jobSeeker.SecondarySkill;
                updatejobseeker.Summary = jobSeeker.Summary;
            }
            db.SaveChanges();
            if (updatejobseeker == null)
                return false;
            return true;
        }
    }
}
