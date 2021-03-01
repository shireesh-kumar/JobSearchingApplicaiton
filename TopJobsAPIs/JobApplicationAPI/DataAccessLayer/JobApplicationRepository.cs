using JobApplicationAPI.Interfaces;
using JobApplicationAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace JobApplicationAPI.DataAccessLayer
{
    public class JobApplicationRepository : IJobApplicationRepository
    {
        private readonly JobApplicationDataContext context;
        public JobApplicationRepository(JobApplicationDataContext _context)
        {
            context = _context;
        }

        public List<JobApplication> GetJobApplications()
        {
            return context.JobApplications.ToList();
        }

        public JobApplication GetJobApplication(int id)
        {
            return context.JobApplications.Find(id);
        }

        public JobApplication AddJobApplication(JobApplication application)
        {
            context.JobApplications.Add(application);
            context.SaveChanges();
            return application;
        }

        public byte UpdateJobApplication(int id, JobApplication application)
        {
            if (id != application.AppId)
            {
                return 3;
            }

            JobApplication _application = context.JobApplications.Find(id);
            if (_application != null)
                _application.Progress = application.Progress;
            else
                return 2;
            context.Entry(_application).State = EntityState.Modified;

            try
            {
                context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!context.JobApplications.Any(a => a.AppId == id))
                {
                    return 2;
                }
                else
                {
                    throw;
                }
            }

            return 1;
        }

        public JobApplication DeleteJobApplication(int id)
        {
            JobApplication application = context.JobApplications.Find(id);
            if (application == null)
            {
                return null;
            }

            context.JobApplications.Remove(application);
            context.SaveChanges();

            return application;
        }
    }
}
