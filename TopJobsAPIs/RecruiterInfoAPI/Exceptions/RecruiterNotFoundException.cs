using System;

namespace RecruiterInfoAPI.Exceptions
{
    public class RecruiterNotFoundException : ApplicationException
    {
        public RecruiterNotFoundException() { }
        public RecruiterNotFoundException(string message) : base(message) { }
    }

    public class RecruiterNotCreatedException : ApplicationException
    {
        public RecruiterNotCreatedException() { }
        public RecruiterNotCreatedException(string message) : base(message) { }

    }
    public class RecruiterAlreadyExistsException : ApplicationException
    {
        public RecruiterAlreadyExistsException() { }
        public RecruiterAlreadyExistsException(string message) : base(message) { }
    }
    public class RecruiterUpToDateException : ApplicationException
    {
        public RecruiterUpToDateException() { }
        public RecruiterUpToDateException(string message) : base(message) { }
    }
}
