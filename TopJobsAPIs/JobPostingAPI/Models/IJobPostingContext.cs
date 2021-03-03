using Microsoft.EntityFrameworkCore;

namespace JobPostingAPI.Models
{
    public interface IJobPostingContext
    {
        DbSet<JobPosting> JobPostings { get; set; }
        int SaveChanges();
    }
}