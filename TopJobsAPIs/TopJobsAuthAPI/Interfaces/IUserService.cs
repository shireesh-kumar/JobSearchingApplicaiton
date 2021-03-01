using TopJobsAuthAPI.Models;

namespace TopJobsAuthAPI.Interfaces
{
    public interface IUserService
    {
        bool LoginUser(User user);
        bool RegisterUser(User user);
    }
}
