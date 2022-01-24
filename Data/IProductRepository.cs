using System.Collections.Generic;
using New_folder.Models;

namespace New_folder.Data
{
    public interface IProductRepository
    {
        List<Product> GetAll();
        Product GetProductById(int id);

    }
}