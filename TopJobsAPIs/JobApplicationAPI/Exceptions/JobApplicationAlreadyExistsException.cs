using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JobApplicationAPI.Exceptions
{
    public class JobApplicationAlreadyExistsException:ApplicationException
    {
        public JobApplicationAlreadyExistsException() : base() { }
        public JobApplicationAlreadyExistsException(string message) : base(message) { }
    }
}
