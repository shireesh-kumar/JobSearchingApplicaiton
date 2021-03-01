using System;

namespace JobApplicationAPI.Exceptions
{
    public class JobApplicationNotFoundException:ApplicationException
    {
        public JobApplicationNotFoundException() : base() { }
        public JobApplicationNotFoundException(string message) : base(message) { }
    }
}
