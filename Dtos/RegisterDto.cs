using System.ComponentModel.DataAnnotations;

namespace New_folder.Dtos
{
    public class RegisterDto
    {   
        public string Name { set; get; }
        public string Email { set; get; }
        public string Password { set; get; }
        public string Status { set; get; }
    }
}