using RecruiterInfoAPI.Models;
using System.Collections.Generic;

namespace RecruiterInfoAPI.Repositories
{
    public interface IRecruiterRepository
    {
        bool DeleteDataById(string r_id);
        IEnumerable<Recruiter> GetAllData();
        Recruiter GetDataById(string r_id);
        bool PostData(Recruiter job);
        byte UpdateData(Recruiter job, string id);
    }
}