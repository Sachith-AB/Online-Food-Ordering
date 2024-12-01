package com.scahith.onlineFoodOrdering.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scahith.onlineFoodOrdering.model.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {
    
    public List<Order> findByCustomerId(Long userId);

    public List<Order> findByResturantId(Long resturantId);
}
