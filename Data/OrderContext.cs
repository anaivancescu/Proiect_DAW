using Microsoft.EntityFrameworkCore;
using New_folder.Models;

namespace New_folder.Data
{
    public class OrderContext:DbContext
    {
        public OrderContext(DbContextOptions<OrderContext> options) : base(options){}

    
        public DbSet<Order> Orders {set; get;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}