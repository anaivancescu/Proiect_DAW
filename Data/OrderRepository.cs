using System.Collections.Generic;
using System.Linq;
using New_folder.Models;

namespace New_folder.Data
{
    public class OrderRepository: IOrderRepository
    {
        private readonly OrderContext _context;

        public OrderRepository(OrderContext context)
        {
            _context = context;
        }

        public List<Order> GetAllOrders()
        {
            return _context.Orders.ToList();
        }

        public Order GetOrder(int orderId)
        {
            return _context.Orders.FirstOrDefault(p => p.OrderId == orderId);
        }

        public bool AddOrder(Order p)
        {
            _context.Orders.Add(p);
            _context.SaveChanges();
            return true;
        }
    }
}