using System;
using System.Collections.Generic;
using System.Linq;
using New_folder.Models;

namespace New_folder.Data
{
    public class ProductRepository: IProductRepository
    {
        private readonly ProductContext _context;

        public ProductRepository(ProductContext context)
        {
            _context = context;
        }

        public List<Product> GetAll()
        {
            return _context.Products.ToList();
        }

        public Product GetProductById(int productId)
        {
            return _context.Products.FirstOrDefault(p => p.Id == productId);
        }
    }
}