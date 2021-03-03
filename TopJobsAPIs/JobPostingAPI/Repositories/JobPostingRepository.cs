using JobPostingAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace JobPostingAPI.Repositories
{
    public class JobPostingRepository : IJobPostingRepository
    {
        public IJobPostingContext db;

        public JobPostingRepository(IJobPostingContext _db)
        {
            db = _db;
        }
        public IEnumerable<JobPosting> GetAllData()
        {
            return db.JobPostings.ToList();
        }

        public bool PostData(JobPosting job)
        {
            db.JobPostings.Add(job);
            var result = db.SaveChanges();
            if (result > 0) return true;
            else return false;
        }

        public byte UpdateData(JobPosting job, int id)
        {
            JobPosting node = db.JobPostings.ToList().FirstOrDefault(val => val.JP_ID == id);


            node.Approved = job.Approved;
            node.Category = job.Category;
            node.Closed = job.Closed;
            node.ExperienceInYears = job.ExperienceInYears;
            node.HiringOrganization = job.HiringOrganization;
            node.JobDescription = job.JobDescription;
            node.JobTitle = job.JobTitle;
            node.Location = job.Location;
            node.PrimarySkill = job.PrimarySkill;
            node.SecondarySkill = job.SecondarySkill;
            node.Salary = job.Salary;
            node.RequiredQualification = job.RequiredQualification;

            var result = db.SaveChanges();
            if (result > 0) return 1;
            else return 2;

        }

        public JobPosting GetDataById(int jp_id)
        {
            return db.JobPostings.Find(jp_id);
        }

        public byte DeleteDataById(int jp_id)
        {
            var job = db.JobPostings.Find(jp_id);
            if (job == null)
            {
                return 0;
            }
            else
            {
                db.JobPostings.Remove(job);
                var result = db.SaveChanges();
                if (result > 0)
                {
                    return 1;
                }
                return 2;
            }
        }
    }
}
