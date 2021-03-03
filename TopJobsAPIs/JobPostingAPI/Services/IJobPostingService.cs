using JobPostingAPI.Models;
using System.Collections.Generic;

namespace JobPostingAPI.Services
{
    public interface IJobPostingService
    {
        bool DeleteById(int jp_id);
        IEnumerable<JobPosting> GetAllData();
        JobPosting GetDataById(int jp_id);
        bool PostData(JobPosting post);
        bool UpdateData(JobPosting post, int id);
    }
}