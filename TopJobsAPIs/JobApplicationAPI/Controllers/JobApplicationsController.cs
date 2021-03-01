using JobApplicationAPI.Exceptions;
using JobApplicationAPI.Interfaces;
using JobApplicationAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace JobApplicationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobApplicationsController : ControllerBase
    {
        private readonly IJobApplicationService service;
        public JobApplicationsController(IJobApplicationService _service)
        {
            service = _service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return StatusCode(200, service.GetJobApplications());
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error occurred");
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return StatusCode(200, service.GetJobApplication(id));
            }
            catch (JobApplicationNotFoundException janf)
            {
                return NotFound(janf.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error occurred");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] JobApplication application)
        {
            try
            {
                return StatusCode(201, service.AddJobApplication(application));
            }
            catch (JobApplicationAlreadyExistsException jaae)
            {
                return Conflict(jaae.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error occurred");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] JobApplication application)
        {
            try
            {
                if (service.UpdateJobApplication(id, application))
                    return StatusCode(200);
                return BadRequest();
            }
            catch (JobApplicationNotFoundException janf)
            {
                return NotFound(janf.Message);
            }
            //catch (Exception)
            //{
            //    return StatusCode(500, "Internal server error occurred");
            //}
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                return StatusCode(200, service.DeleteJobApplication(id));
            }
            catch (JobApplicationNotFoundException janf)
            {
                return NotFound(janf.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error occurred");
            }
        }
    }
}
