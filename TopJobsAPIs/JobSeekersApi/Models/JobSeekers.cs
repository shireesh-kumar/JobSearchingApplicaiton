using System;
using System.Collections.Generic;

namespace JobSeekersApi.Models
{
    public partial class JobSeekers
    {
        public string JsId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Summary { get; set; }
        public string Qualification { get; set; }
        public decimal Percentage { get; set; }
        public string PrimarySkill { get; set; }
        public string SecondarySkill { get; set; }
        public byte ExperienceYears { get; set; }
        public int? ResumeViews { get; set; }
    }
}
