using JobSeekersApi.Exceptions;
using JobSeekersApi.Models;
using JobSeekersApi.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace JobSeekersApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobSeekersController : ControllerBase
    {
        private readonly IJobSeekerService service;
        public JobSeekersController(IJobSeekerService _service)
        {
            service = _service;
        }
        // GET: api/<JobSeekerController>
        [HttpGet, EnableCors("AllowOrigin")]
        public IEnumerable<JobSeekers> Get()
        {
            return service.GetJobSeeker();
        }

        // GET api/<JobSeekerController>/5
        [HttpGet("{id}"), EnableCors("AllowOrigin")]
        public IActionResult Get(string id)
        {
            try
            {
                return Ok(service.GetJobSeekerById(id));
            }
            catch (JobSeekerNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong. Unable to fetch the JobSeeker details");
            }
        }

        // POST api/<JobSeekerController>
        [HttpPost, EnableCors("AllowOrigin")]
        public IActionResult Post([FromBody] JobSeekers jobSeeker)
        {
            try
            {
                return Created("", service.AddJobSeeker(jobSeeker));
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong. Unable to create new JobSeeker");
            }
        }

        // PUT api/<JobSeekerController>/5
        [HttpPut("{id}"), EnableCors("AllowOrigin")]
        public IActionResult Put(string id, [FromBody] JobSeekers jobSeeker)
        {
            try
            {
                var updateResult = service.UpdateJobSeeker(id, jobSeeker);
                if (updateResult == true)
                    return Ok(updateResult);
                else
                    return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong. Unable to update the JobSeeker");
            }
            catch (JobSeekerNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong. Unable to update the JobSeeker");
            }
        }

        // DELETE api/<JobSeekerController>/5
        [HttpDelete("{id}"), EnableCors("AllowOrigin")]
        public IActionResult Delete(string id)
        {
            try
            {
                return Ok(service.DeleteJobSeeker(id));
            }
            catch (JobSeekerNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong. Unable to delete the Jobseeker");
            }
        }
    }
}
