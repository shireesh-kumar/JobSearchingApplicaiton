using Microsoft.EntityFrameworkCore;

namespace RecruiterInfoAPI.Models
{
    public class RecruiterContext : DbContext, IRecruiterContext
    {
        public RecruiterContext() { }
        public RecruiterContext(DbContextOptions<RecruiterContext> options) : base(options)
        {

        }

        public virtual DbSet<Recruiter> Recruiters { get; set; }
    }
}
