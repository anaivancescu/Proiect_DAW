using Microsoft.EntityFrameworkCore;
using New_folder.Models;

namespace New_folder.Data {

    public class ProductContext:DbContext
    {
    public ProductContext(DbContextOptions<ProductContext> options) : base(options){}

    
    public DbSet<Product> Products {set; get;}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
    }
    }
}
