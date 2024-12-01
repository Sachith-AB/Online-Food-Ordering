package com.scahith.onlineFoodOrdering.service;

import com.scahith.onlineFoodOrdering.model.Cart;
import com.scahith.onlineFoodOrdering.model.CartItem;
import com.scahith.onlineFoodOrdering.request.AddCartItemRequest;

public interface CartService {
    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception;

    public CartItem updateCartItemQuantity(Long cartitemId,int quantitiy) throws Exception;

    public Cart removeItemFromCart(Long cartItemId,String jwt) throws Exception;

    public Long calculateCartTotals (Cart cart) throws Exception;

    public Cart findCartById(Long id) throws Exception;

    public Cart findCartByUserId(Long userId) throws Exception;

    public Cart clearCart(Long userId) throws Exception;
}
