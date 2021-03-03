using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecruiterInfoAPI.Models
{
    public class Recruiter
    {
        [Key]
        [Column(TypeName = "varchar(10)")]
        public string R_ID { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string RecruiterName { get; set; }
        [Required]
        [Column(TypeName = "varchar(75)")]
        public string HiringOrganization { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Email { get; set; }
    }
}
