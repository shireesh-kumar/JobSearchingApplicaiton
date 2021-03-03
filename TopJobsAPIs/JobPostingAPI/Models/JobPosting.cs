namespace JobPostingAPI.Models
{
    public partial class JobPosting
    {
        public int JP_ID { get; set; }
        public string JobTitle { get; set; }
        public string JobDescription { get; set; }
        public string HiringOrganization { get; set; }
        public decimal Salary { get; set; }
        public string Location { get; set; }
        public string RequiredQualification { get; set; }
        public string PrimarySkill { get; set; }
        public string SecondarySkill { get; set; }
        public byte ExperienceInYears { get; set; }
        public string Category { get; set; }
        public bool? Approved { get; set; }
        public bool? Closed { get; set; }
        public string R_ID { get; set; }
    }
}
