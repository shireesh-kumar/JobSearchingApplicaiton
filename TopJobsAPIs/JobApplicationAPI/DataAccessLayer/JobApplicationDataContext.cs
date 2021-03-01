using JobApplicationAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace JobApplicationAPI.DataAccessLayer
{
    public class JobApplicationDataContext : DbContext
    {
        public JobApplicationDataContext(DbContextOptions options) : base(options)
        {
            Database.EnsureCreated();
        }
        public virtual DbSet<JobApplication> JobApplications { get; set; }
    }
}
