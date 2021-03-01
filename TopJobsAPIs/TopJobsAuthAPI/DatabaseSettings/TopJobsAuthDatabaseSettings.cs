using TopJobsAuthAPI.Interfaces;

namespace TopJobsAuthAPI.DatabaseSettings
{
    public class TopJobsAuthDatabaseSettings : ITopJobsAuthDatabaseSettings
    {
        public string ConnectionString { get; set; }
        public string UsersCollectionName { get; set; }
        public string DatabaseName { get; set; }
    }
}
