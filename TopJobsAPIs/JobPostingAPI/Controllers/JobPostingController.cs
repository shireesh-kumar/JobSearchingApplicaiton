using JobPostingAPI.Exceptions;
using JobPostingAPI.Models;
using JobPostingAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace JobPostingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobPostingController : ControllerBase
    {
        public IJobPostingService serve;

        public JobPostingController(IJobPostingService _serve)
        {
            serve = _serve;
        }

        [HttpGet]
        public IEnumerable<JobPosting> Get()
        {
            return serve.GetAllData();
        }

        [HttpPost]
        public IActionResult Post([FromBody] JobPosting job)
        {
            try
            {
                serve.PostData(job);
                return StatusCode(StatusCodes.Status200OK);

            }
            catch (JobPostingNotCreatedException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong not able to add the data <JobPostingNotCreatedException>");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong not able to add the data");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromBody] JobPosting job, int id)
        {
            try
            {
                serve.UpdateData(job, id);
                return StatusCode(StatusCodes.Status200OK);
            }
            catch (JobPostingNotFoundException)
            {
                return StatusCode(StatusCodes.Status404NotFound, $"Job Post of id {id} not found ");
            }
            catch (JobPostingUpToDateException)
            {
                return StatusCode(StatusCodes.Status304NotModified);
            }
            catch (JobPostingInvalidDataException)
            {
                return StatusCode(StatusCodes.Status401Unauthorized, "Data Miss match error with the given id suppose ");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong not able to update the data");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetDataById(int id)
        {
            try
            {
                return StatusCode(200,serve.GetDataById(id));

            }
            catch (JobPostingNotFoundException)
            {
                return StatusCode(StatusCodes.Status404NotFound,$"Job Post of id {id} not present"); ;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,$"something went wrong internal server error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById(int id)
        {
            try
            {
                serve.DeleteById(id);
                return StatusCode(StatusCodes.Status200OK);


            }
            catch (JobPostingNotFoundException)
            {
                return StatusCode(StatusCodes.Status404NotFound, $"Job Post of id {id} not found");

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong not able to delete the data");

            }
        }
    }
}
