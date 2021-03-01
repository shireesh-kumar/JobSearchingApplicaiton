using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TopJobsAuthAPI.Exceptions;
using TopJobsAuthAPI.Interfaces;
using TopJobsAuthAPI.Models;

namespace TopJobsAuthAPI.Controllers
{
    [Route("[controller]"), ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService service;
        public UsersController(IUserService _service)
        {
            service = _service;
        }

        [HttpPost, Route("register")]
        public IActionResult Register([FromBody] User user)
        {
            try
            {
                service.RegisterUser(user);
                return StatusCode(201);
            }
            catch (UserAlreadyExistsException uae)
            {
                return Conflict(uae.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error occurred");
            }
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] User user)
        {
            try
            {
                service.LoginUser(user);
                return Ok(GetToken(user.UserId));
            }
            catch (UserNotFoundException unf)
            {
                return Unauthorized(unf.Message);
            }
            catch
            {
                return StatusCode(500, "Internal server error occurred");
            }
        }

        private string GetToken(string userId)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.UniqueName, userId),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secret_user_auth_jwt_to_secure_microservices"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "TopJobsUserAuthenticationServer",
                audience: "TopJobsUserAuthClient",
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(20),
                signingCredentials: creds
            );

            var response = new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            };

            return JsonConvert.SerializeObject(response);
        }
    }
}
