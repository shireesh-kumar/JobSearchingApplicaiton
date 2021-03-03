using Microsoft.EntityFrameworkCore;

namespace JobPostingAPI.Models
{
    public partial class JobPostingContext : DbContext, IJobPostingContext
    {
        public JobPostingContext()
        {
        }

        public JobPostingContext(DbContextOptions<JobPostingContext> options)
            : base(options)
        {
        }

        public virtual DbSet<JobPosting> JobPostings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<JobPosting>(entity =>
            {
                entity.HasKey(e => e.JP_ID)
                    .HasName("PK__JobPosti__BE8866C38B4A897D");

                entity.Property(e => e.JP_ID).HasColumnName("JP_ID");

                entity.Property(e => e.Approved).HasDefaultValueSql("((0))");

                entity.Property(e => e.Category)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Closed).HasDefaultValueSql("((0))");

                entity.Property(e => e.HiringOrganization)
                    .IsRequired()
                    .HasMaxLength(75)
                    .IsUnicode(false);

                entity.Property(e => e.JobDescription)
                    .IsRequired()
                    .HasMaxLength(600)
                    .IsUnicode(false);

                entity.Property(e => e.JobTitle)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.PrimarySkill)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.R_ID)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("R_ID");

                entity.Property(e => e.RequiredQualification)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Salary).HasColumnType("decimal(16, 2)");

                entity.Property(e => e.SecondarySkill)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}