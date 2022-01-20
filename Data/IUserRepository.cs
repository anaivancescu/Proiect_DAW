using New_folder.Models;

namespace New_folder.Data
{
    public interface IUserRepository
    {
        User Create(User user);
    }
}