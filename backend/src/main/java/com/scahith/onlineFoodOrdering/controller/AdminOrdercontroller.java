package com.scahith.onlineFoodOrdering.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.scahith.onlineFoodOrdering.model.Order;
import com.scahith.onlineFoodOrdering.service.OrderService;
import com.scahith.onlineFoodOrdering.service.UserService;

@RestController
@RequestMapping("/api/admin")
public class AdminOrdercontroller {
    
    @Lazy
    @Autowired
    private OrderService orderService;

    @Lazy
    @Autowired
    private UserService userService;

    @GetMapping("/order/resturant/{resturnatId}/{orderStatus}")
    public ResponseEntity<List<Order>> getOrderHistory(@PathVariable Long id,@PathVariable String orderStatus, @RequestHeader("Authorization") String jwt) throws Exception{
        
        userService.findUserByJwtToken(jwt);
        List<Order> orders = orderService.getResturnatOrder(id,orderStatus);
        return new ResponseEntity<>(orders,HttpStatus.CREATED);
    }

    @PutMapping("/order/{orderId}/{orderStatus}")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long orderId,@PathVariable String orderStatus , @RequestHeader("Authorization") String jwt) throws Exception{
        
        userService.findUserByJwtToken(jwt);
        Order orders = orderService.updateOrder(orderId,orderStatus);
        return new ResponseEntity<>(orders,HttpStatus.CREATED);
    }

}
