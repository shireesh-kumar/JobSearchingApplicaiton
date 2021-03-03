using Microsoft.EntityFrameworkCore;

namespace RecruiterInfoAPI.Models
{
    public interface IRecruiterContext
    {
        DbSet<Recruiter> Recruiters { get; set; }
        public int SaveChanges();
    }
}