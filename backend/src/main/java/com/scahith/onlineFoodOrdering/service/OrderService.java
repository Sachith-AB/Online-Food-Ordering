package com.scahith.onlineFoodOrdering.service;

import java.util.List;

import com.scahith.onlineFoodOrdering.model.Order;
import com.scahith.onlineFoodOrdering.model.User;
import com.scahith.onlineFoodOrdering.request.OrderRequest;

public interface OrderService {
    public Order createOrder(OrderRequest order,User user) throws Exception;

    public Order updateOrder(Long orderId,String orderStatus) throws Exception;

    public void cancelOrder(Long orderId) throws Exception;

    public List<Order> getCustomerOrders(Long userId) throws Exception;

    public List<Order> getResturnatOrder(Long resturantId,String orderStatus) throws Exception;

    public Order findOrderById(Long id) throws Exception;
}
