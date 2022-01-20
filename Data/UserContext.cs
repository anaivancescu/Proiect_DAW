using Microsoft.EntityFrameworkCore;
using New_folder.Models;

namespace New_folder.Data {

    public class UserContext:DbContext
    {
    public UserContext(DbContextOptions<UserContext> options) : base(options){}

    public DbSet<User> Users {set; get;}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<User>(entity => { entity.HasIndex(e => e.Email).IsUnique(); });
    }
    }
}
