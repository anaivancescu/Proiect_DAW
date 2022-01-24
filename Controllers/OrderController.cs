
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using New_folder.Data;
using New_folder.Models;

namespace New_folder.Controllers
{ [ Route("api") ] 
  [ ApiController ]
    public class OrderController : Controller
    {
        
        private readonly IOrderRepository _repository;

        public OrderController(IOrderRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("order")]
        public ActionResult<Order> CreateOrder(Order p)
        {
            
            var res = _repository.AddOrder(p);

            return Created("success", res);

        }
        [HttpGet("GetOrders")]
        public ActionResult<List<Order>> GetAllOrders()
        {
            return _repository.GetAllOrders();
        }
        [HttpGet("order/{id}")]
        public ActionResult<Order> GetOrder(int id)
        {
            return _repository.GetOrder(id);
        }


           
    }
    
}