using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace JobSeekersApi.Models
{
    public partial class TopJobsDBContext : DbContext
    {
        public TopJobsDBContext()
        {
        }

        public TopJobsDBContext(DbContextOptions<TopJobsDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<JobSeekers> JobSeekers { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer("server=BLR1-LHP-N71864\\MSSQLSERVER01;Database=TopJobsDB;Integrated security=True");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JobSeekers>(entity =>
            {
                entity.HasKey(e => e.JsId)
                    .HasName("PK__JobSeeke__D294F45D8B763E2D");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__JobSeeke__A9D1053460498390")
                    .IsUnique();

                entity.Property(e => e.JsId)
                    .HasColumnName("JS_ID")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ExperienceYears).HasColumnName("Experience_years");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Percentage).HasColumnType("decimal(5, 2)");

                entity.Property(e => e.PrimarySkill)
                    .IsRequired()
                    .HasColumnName("Primary_skill")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Qualification)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ResumeViews)
                    .HasColumnName("Resume_views")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.SecondarySkill)
                    .IsRequired()
                    .HasColumnName("Secondary_skill")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Summary)
                    .IsRequired()
                    .HasMaxLength(1200)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
