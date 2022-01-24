using System.Collections.Generic;
using New_folder.Models;

namespace New_folder.Data
{
    public interface IOrderRepository
    {
        List<Order> GetAllOrders();
        Order GetOrder(int id);
        bool AddOrder(Order p);
    }
}