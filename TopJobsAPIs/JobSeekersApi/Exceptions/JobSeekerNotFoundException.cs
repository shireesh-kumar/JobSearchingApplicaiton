using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobSeekersApi.Exceptions
{
    public class JobSeekerNotFoundException : ApplicationException
    {
        public JobSeekerNotFoundException() { }
        public JobSeekerNotFoundException(string message) : base(message) { }
    }
}
