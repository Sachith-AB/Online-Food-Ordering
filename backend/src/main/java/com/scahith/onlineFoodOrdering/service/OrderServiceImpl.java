package com.scahith.onlineFoodOrdering.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.scahith.onlineFoodOrdering.model.Address;
import com.scahith.onlineFoodOrdering.model.Cart;
import com.scahith.onlineFoodOrdering.model.CartItem;
import com.scahith.onlineFoodOrdering.model.Order;
import com.scahith.onlineFoodOrdering.model.OrderItem;
import com.scahith.onlineFoodOrdering.model.Resturant;
import com.scahith.onlineFoodOrdering.model.User;
import com.scahith.onlineFoodOrdering.repository.AddressRepository;
import com.scahith.onlineFoodOrdering.repository.OrderItemRepository;
import com.scahith.onlineFoodOrdering.repository.OrderRepository;
import com.scahith.onlineFoodOrdering.repository.UserRepository;
import com.scahith.onlineFoodOrdering.request.OrderRequest;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Lazy
    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private ResturantService resturantService;

    @Autowired
    private CartService cartService;

    @Override
    public Order createOrder(OrderRequest order, User user) throws Exception {

        Address shippingAddress = order.getDeliveryAddress();
        Address savedAddress=addressRepository.save(shippingAddress);

        if(!user.getAddresses().contains(savedAddress)){
            user.getAddresses().add(savedAddress);
            userRepository.save(user);
        }
        Resturant resturant = resturantService.findResturantById(order.getResturnatId());

        Order createdOrder = new Order();
        createdOrder.setCustomer(user);
        createdOrder.setCreatedAt(new Date());
        createdOrder.setOrderStatus("PENDING");
        createdOrder.setDeliveryAddress(savedAddress);
        createdOrder.setResturant(resturant);

        Cart cart = cartService.findCartByUserId(user.getId());
        List<OrderItem> orderItems = new ArrayList<>();

        for(CartItem cartItem : cart.getItem()){
            OrderItem orderItem = new OrderItem();

            orderItem.setFood(cartItem.getFood());
            orderItem.setIngredients(cartItem.getIngredients());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setTotalPrice(cartItem.getTotalPrice());

            OrderItem savedOrderItem = orderItemRepository.save(orderItem);
            orderItems.add(savedOrderItem);
        }

        createdOrder.setItems(orderItems);
        createdOrder.setTotalPrice(cart.getTotal());

        Order savedorder = orderRepository.save(createdOrder);
        resturant.getOrders().add(savedorder);
        return savedorder;
    }

    @Override
    public Order updateOrder(Long orderId, String orderStatus) throws Exception {
        Order order = orderService.findOrderById(orderId);

        if(orderStatus.equals("OUT_FOR_DELIVERY") || orderStatus.equals("DELIVRED") || orderStatus.equals("COMPLETED") || orderStatus.equals("PENDING")){
            order.setOrderStatus(orderStatus);
            return orderRepository.save(order);
        }
        throw new Exception("Please seldect valid order status");
    }

    @Override
    public void cancelOrder(Long orderId) throws Exception {
        orderService.findOrderById(orderId);
    }

    @Override
    public List<Order> getCustomerOrders(Long userId) throws Exception {

        return orderRepository.findByCustomerId(userId);
    }

    @Override
    public List<Order> getResturnatOrder(Long resturantId, String orderStatus) throws Exception {
        List<Order> orders = orderRepository.findByResturantId(resturantId);
        if(orderStatus !=null){
            orders=orders.stream().filter(order->order.getOrderStatus().equals(orderStatus)).collect(Collectors.toList());
        }
        return orders;
    }

    @Override
    public Order findOrderById(Long id) throws Exception {

        Optional<Order> optionalOrder=orderRepository.findById(id);
        if(optionalOrder.isEmpty()){
            throw new Exception("Order not found");
        }
        return optionalOrder.get();
    }
    
}
