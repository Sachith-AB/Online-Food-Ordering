package com.scahith.onlineFoodOrdering.repository;

import com.scahith.onlineFoodOrdering.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long> {
} 
