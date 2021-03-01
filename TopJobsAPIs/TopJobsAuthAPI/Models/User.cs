using MongoDB.Bson.Serialization.Attributes;

namespace TopJobsAuthAPI.Models
{
    public class User
    {
        [BsonId]
        public string UserId { get; set; }
        public string Name { get; set; }
        [BsonRequired]
        public string Email { get; set; }
        [BsonRequired]
        public string Password { get; set; }
        [BsonRequired]
        public byte Role { get; set; }
    }
}
