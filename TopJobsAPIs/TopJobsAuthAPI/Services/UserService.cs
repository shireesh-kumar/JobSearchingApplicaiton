using MongoDB.Driver;
using System.Linq;
using TopJobsAuthAPI.Exceptions;
using TopJobsAuthAPI.Interfaces;
using TopJobsAuthAPI.Models;

namespace TopJobsAuthAPI.Services
{
    public class UserService : IUserService
    {
        private readonly IMongoClient client;
        private readonly IMongoDatabase database;
        private readonly IMongoCollection<User> Users;
        public UserService(ITopJobsAuthDatabaseSettings settings)
        {
            client = new MongoClient(settings.ConnectionString);
            database = client.GetDatabase(settings.DatabaseName);
            Users = database.GetCollection<User>(settings.UsersCollectionName);
        }

        public bool LoginUser(User user)
        {
            User _user = Users.Find(u => u.Email == user.Email && u.Password == user.Password && u.Role == user.Role).FirstOrDefault();
            if (_user != null)
            {
                user.UserId = _user.UserId;
                return true;
            }
            throw new UserNotFoundException("Invalid email ID, password or role");
        }

        public bool RegisterUser(User user)
        {
            if (Users.Find(u => u.Email == user.Email).FirstOrDefault() == null)
            {
                Users.InsertOne(user);
                return true;
            }
            throw new UserAlreadyExistsException($"User with email ID: {user.Email} already exists");
        }
    }
}
