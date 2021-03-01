using JobApplicationAPI.Exceptions;
using JobApplicationAPI.Interfaces;
using JobApplicationAPI.Models;
using System.Collections.Generic;

namespace JobApplicationAPI.Services
{
    public class JobApplicationService : IJobApplicationService
    {
        private readonly IJobApplicationRepository repository;
        public JobApplicationService(IJobApplicationRepository _repository)
        {
            repository = _repository;
        }

        public JobApplication AddJobApplication(JobApplication application)
        {
            if (repository.GetJobApplication(application.AppId) == null)
                return repository.AddJobApplication(application);
            throw new JobApplicationAlreadyExistsException($"Job application with id: {application.AppId} already exists");
        }

        public JobApplication DeleteJobApplication(int id)
        {
            if (repository.GetJobApplication(id) != null)
                return repository.DeleteJobApplication(id);
            throw new JobApplicationNotFoundException($"Job application with id: {id} does not exist");
        }

        public JobApplication GetJobApplication(int id)
        {
            JobApplication application = repository.GetJobApplication(id);
            if (application != null)
                return application;
            throw new JobApplicationNotFoundException($"Job application with id: {id} does not exist");
        }

        public List<JobApplication> GetJobApplications()
        {
            return repository.GetJobApplications();
        }

        public bool UpdateJobApplication(int id, JobApplication application)
        {
            byte result = repository.UpdateJobApplication(id, application);
            if (result == 1)
                return true;
            else if (result == 2)
                throw new JobApplicationNotFoundException($"Job application with id: {id} does not exist");
            return false;
        }
    }
}
