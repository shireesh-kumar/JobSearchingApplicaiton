using RecruiterInfoAPI.Models;
using System.Collections.Generic;

namespace RecruiterInfoAPI.Services
{
    public interface IRecruiterService
    {
        bool DeleteById(string r_id);
        IEnumerable<Recruiter> GetAllData();
        Recruiter GetDataById(string r_id);
        bool PostData(Recruiter post);
        byte UpdateData(Recruiter post, string id);
    }
}