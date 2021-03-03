using System;

namespace JobPostingAPI.Exceptions
{
    public class JobPostingNotFoundException : ApplicationException
    {
        public JobPostingNotFoundException() { }
        public JobPostingNotFoundException(string message) : base(message) { }
    }

    public class JobPostingNotCreatedException : ApplicationException
    {
        public JobPostingNotCreatedException() { }
        public JobPostingNotCreatedException(string message) : base(message) { }

    }
    public class JobPostingUpToDateException : ApplicationException
    {
        public JobPostingUpToDateException() { }
        public JobPostingUpToDateException(string message) : base(message) { }

    }
    public class JobPostingInvalidDataException : ApplicationException
    {
        public JobPostingInvalidDataException() { }
        public JobPostingInvalidDataException(string message) : base(message) { }

    }
}
