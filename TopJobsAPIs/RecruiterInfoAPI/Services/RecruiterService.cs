using RecruiterInfoAPI.Exceptions;
using RecruiterInfoAPI.Models;
using RecruiterInfoAPI.Repositories;
using System.Collections.Generic;

namespace RecruiterInfoAPI.Services
{
    public class RecruiterService : IRecruiterService
    {
        IRecruiterRepository repo;
        public RecruiterService(IRecruiterRepository _repo)
        {
            repo = _repo;
        }

        public IEnumerable<Recruiter> GetAllData()
        {
            return repo.GetAllData();
        }

        public bool PostData(Recruiter post)
        {
            if (repo.GetDataById(post.R_ID) == null)
            {
                var result = repo.PostData(post);
                if (result == false)
                {
                    throw new RecruiterNotCreatedException();
                }
                return true;
            }
            throw new RecruiterAlreadyExistsException();
        }

        public byte UpdateData(Recruiter post, string id)
        {
            var result = repo.UpdateData(post, id);
            if (result == 0)
            {
                throw new RecruiterNotFoundException();
            }
            else if (result == 1)
            {
                return 1;
            }
            else
            {
                throw new RecruiterUpToDateException();
            }


        }

        public bool DeleteById(string r_id)
        {
            var result = repo.DeleteDataById(r_id);
            if (result == false)
            {
                throw new RecruiterNotFoundException();
            }
            return result;
        }

        public Recruiter GetDataById(string r_id)
        {
            var result = repo.GetDataById(r_id);
            if (result != null)
            {
                return result;
            }
            throw new RecruiterNotFoundException();
        }
    }
}
