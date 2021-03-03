using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RecruiterInfoAPI.Exceptions;
using RecruiterInfoAPI.Models;
using RecruiterInfoAPI.Services;
using System;
using System.Collections.Generic;



namespace RecruiterInfoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecruiterController : ControllerBase
    {
        public IRecruiterService serve;

        public RecruiterController(IRecruiterService _serve)
        {
            serve = _serve;
        }

        [HttpGet]
        public IEnumerable<Recruiter> Get()
        {
            return serve.GetAllData();
        }

        [HttpPost]
        public IActionResult Post([FromBody] Recruiter recru)
        {
            try 
            {
                serve.PostData(recru);
                return StatusCode(StatusCodes.Status200OK);

            }
            catch (RecruiterNotCreatedException)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong not able to add the data <RecruiterNotCreatedException>");
            }
            catch (RecruiterAlreadyExistsException)
            {
                return StatusCode(StatusCodes.Status409Conflict, $"Recruiter Already Exists {recru.R_ID}.");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong not able to post the data ");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromBody] Recruiter job, string id)
        {

            try
            {
                serve.UpdateData(job, id);
                return StatusCode(StatusCodes.Status200OK);


            }
            catch (RecruiterNotFoundException)
            {
                return StatusCode(StatusCodes.Status404NotFound, $" The Recruiter id : {id} was not found");
            }
            catch (RecruiterUpToDateException)
            {
                return StatusCode(StatusCodes.Status304NotModified, "Everything is up to date no changes found");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetDataById(string id)
        {
            try 
            {
                return StatusCode(200,serve.GetDataById(id));
            }
            catch (RecruiterNotFoundException)
            {
                return StatusCode(StatusCodes.Status404NotFound ,$"Recruiter with id:{id} not exists");
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong");
            }

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById(string id)
        {
            try
            {
                serve.DeleteById(id);
                return StatusCode(StatusCodes.Status200OK);


            }
            catch (RecruiterNotFoundException)
            {
                return StatusCode(StatusCodes.Status404NotFound, $"R_ID{id} not found or not created");

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something went wrong not able to delete the data");

            }
        }

    }
}
