using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobApplicationAPI.Models
{
    public class JobApplication
    {
        [Key, Column("App_ID")]
        public int AppId { get; set; }
        [Column("JS_ID")]
        public string JsId { get; set; }
        [Column("JP_ID")]
        public int JpId { get; set; }
        public byte Progress { get; set; }
    }
}
