using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using New_folder.Data;
using New_folder.Models;

namespace New_folder.Controllers {
    [ Route("api") ]
    [ ApiController ]
        public class ShopController: Controller
        {
            private readonly IProductRepository _repository;

            public ShopController(IProductRepository repository)
            {
                _repository = repository;
            }

           
            [HttpGet("products")]
            public ActionResult<List<Product>> GetAllProducts()
            {
                return _repository.GetAll();
            }
            [HttpGet("product/{id}")]
            public ActionResult<Product> GetProductById(int id)
            {
                return _repository.GetProductById(id);
            }


           
        }
}
