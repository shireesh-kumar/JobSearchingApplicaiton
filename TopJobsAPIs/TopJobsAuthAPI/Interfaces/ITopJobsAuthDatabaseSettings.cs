namespace TopJobsAuthAPI.Interfaces
{
    public interface ITopJobsAuthDatabaseSettings
    {
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
        string UsersCollectionName { get; set; }
    }
}
