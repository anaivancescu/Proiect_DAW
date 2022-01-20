using System.Data;
using Microsoft.AspNetCore.Mvc;
using New_folder.Data;
using New_folder.Dtos;
using New_folder.Models;

namespace New_folder.Controllers {
    [ Route("api") ]
    [ ApiController ]
        public class AuthController: Controller
        {
            private readonly IUserRepository _repository;

            public AuthController(IUserRepository repository)
            {
                _repository = repository;
            }
            [HttpPost("register")]
            public IActionResult Register(RegisterDto dto)
            {
                var user = new User
                {
                    Name = dto.Name,
                    Email = dto.Email,
                    Password =BCrypt.Net.BCrypt.HashPassword(dto.Password)
                };

               
                
                return Created("success",  _repository.Create(user));
            }
        }
}
