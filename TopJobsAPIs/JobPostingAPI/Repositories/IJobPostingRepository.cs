using JobPostingAPI.Models;
using System.Collections.Generic;

namespace JobPostingAPI.Repositories
{
    public interface IJobPostingRepository
    {
        byte DeleteDataById(int jp_id);
        IEnumerable<JobPosting> GetAllData();
        JobPosting GetDataById(int jp_id);
        bool PostData(JobPosting job);
        byte UpdateData(JobPosting job, int id);
    }
}