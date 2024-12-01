package com.scahith.onlineFoodOrdering.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scahith.onlineFoodOrdering.model.Cart;
import com.scahith.onlineFoodOrdering.model.CartItem;
import com.scahith.onlineFoodOrdering.model.User;
import com.scahith.onlineFoodOrdering.request.AddCartItemRequest;
import com.scahith.onlineFoodOrdering.request.UpdateCartitemRequst;
import com.scahith.onlineFoodOrdering.service.CartService;
import com.scahith.onlineFoodOrdering.service.UserService;

@RestController
@RequestMapping("/api")
public class CartController {
    
    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;

    @PutMapping("/cart/add")
    public ResponseEntity<CartItem> addItemToCart(@RequestBody AddCartItemRequest req, @RequestHeader("Authorization") String jwt) throws Exception{
        
        CartItem cartItem=cartService.addItemToCart(req, jwt);
        return new ResponseEntity<>(cartItem,HttpStatus.OK);
    }

    @PutMapping("/cart/update")
    public ResponseEntity<CartItem> updateCartItemQuantity(@RequestBody UpdateCartitemRequst req, @RequestHeader("Authorization") String jwt) throws Exception{
        
        CartItem cartItem=cartService.updateCartItemQuantity(req.getCartItemId(),req.getQuantitiy());
        return new ResponseEntity<>(cartItem,HttpStatus.OK);
    }

    @DeleteMapping("/cart/{id}/delete")
    public ResponseEntity<Cart> removeItemFromCart(@PathVariable Long id, @RequestHeader("Authorization") String jwt) throws Exception{
        
        Cart cartItem=cartService.removeItemFromCart(id, jwt);
        return new ResponseEntity<>(cartItem,HttpStatus.OK);
    }

    @PutMapping("/cart/clear")
    public ResponseEntity<Cart> clearCart(@RequestHeader("Authorization") String jwt) throws Exception{
        
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.clearCart(user.getId());
        return new ResponseEntity<>(cart,HttpStatus.OK);
    }

    @GetMapping("cart/user/{id}")
    public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws Exception{
        
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.findCartByUserId(user.getId());
        return new ResponseEntity<>(cart,HttpStatus.OK);
    }


}
