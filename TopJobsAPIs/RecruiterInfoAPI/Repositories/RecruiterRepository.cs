using RecruiterInfoAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace RecruiterInfoAPI.Repositories
{
    public class RecruiterRepository : IRecruiterRepository
    {
        public IRecruiterContext db;
        public RecruiterRepository(IRecruiterContext _db)
        {
            db = _db;
        }
        public IEnumerable<Recruiter> GetAllData()
        {
            return db.Recruiters.ToList();
        }
        public bool PostData(Recruiter job)
        {
            db.Recruiters.Add(job);
            var result = db.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;
        }

        public byte UpdateData(Recruiter job, string id)
        {
            Recruiter node = db.Recruiters.ToList().FirstOrDefault(val => val.R_ID == id);
            if (node == null) return 0;
            node.Email = job.Email;
            node.HiringOrganization = job.HiringOrganization;
            node.RecruiterName = job.RecruiterName;

            var result = db.SaveChanges();
            if (result > 0)
            {
                return 1;
            }
            return 2;
        }

        public Recruiter GetDataById(string r_id)
        {
            return db.Recruiters.Find(r_id);
        }

        public bool DeleteDataById(string r_id)
        {
            var job = db.Recruiters.Find(r_id);
            if (job == null)
            {
                return false;
            }
            else
            {
                db.Recruiters.Remove(job);
                db.SaveChanges();
                return true;
            }
        }
    }
}
