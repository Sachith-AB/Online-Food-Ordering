package com.scahith.onlineFoodOrdering.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scahith.onlineFoodOrdering.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {
    
}
