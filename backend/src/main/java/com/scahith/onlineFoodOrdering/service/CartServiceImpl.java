package com.scahith.onlineFoodOrdering.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scahith.onlineFoodOrdering.model.Cart;
import com.scahith.onlineFoodOrdering.model.CartItem;
import com.scahith.onlineFoodOrdering.model.Food;
import com.scahith.onlineFoodOrdering.model.User;
import com.scahith.onlineFoodOrdering.repository.CartItemRepository;
import com.scahith.onlineFoodOrdering.repository.CartRepository;
import com.scahith.onlineFoodOrdering.request.AddCartItemRequest;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private FoodService foodService;

    @Override
    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        
        Food food = foodService.findFoodById(req.getFoodId());

        Cart cart=cartRepository.findByCustomerId(user.getId());

        for(CartItem cartItem : cart.getItem()){
            if(cartItem.getFood().equals(food)){
                int newQuantity=cartItem.getQuantity()+req.getQuantitiy();
                return updateCartItemQuantity(cartItem.getId(), newQuantity);
            }
        }

        CartItem newCartItem=new CartItem();

        newCartItem.setFood(food);
        newCartItem.setCart(cart);
        newCartItem.setQuantity(req.getQuantitiy());
        newCartItem.setIngredients(req.getIngredients());
        newCartItem.setTotalPrice(req.getQuantitiy()*food.getPrice());

        CartItem savedCartItem = cartItemRepository.save(newCartItem);

        cart.getItem().add(savedCartItem);

        return savedCartItem;

    }

    @Override
    public CartItem updateCartItemQuantity(Long CartitemId, int quantitiy) throws Exception {

        Optional<CartItem> cartItemOptional=cartItemRepository.findById(CartitemId);
        if(cartItemOptional.isEmpty()){
            throw new Exception("Cart item not found");
        }

        CartItem item = cartItemOptional.get();
        item.setQuantity(quantitiy);
        item.setTotalPrice(item.getFood().getPrice()*quantitiy);
        return cartItemRepository.save(item);
    }

    @Override
    public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        
        Cart cart=cartRepository.findByCustomerId(user.getId());

        Optional<CartItem> cartItemOptional=cartItemRepository.findById(cartItemId);
        if(cartItemOptional.isEmpty()){
            throw new Exception("Cart item not found");
        }
        CartItem item=cartItemOptional.get();
        cart.getItem().remove(item);

        return cartRepository.save(cart);
    }

    @Override
    public Long calculateCartTotals(Cart cart) throws Exception {
        
        Long total = 0L;

        for(CartItem cartItem : cart.getItem()){
            total += cartItem.getFood().getPrice()*cartItem.getQuantity();
        }
        return total;
    }

    @Override
    public Cart findCartById(Long id) throws Exception {

        Optional<Cart> optionalCart=cartRepository.findById(id);

        if(optionalCart.isEmpty()){
            throw new Exception("cart nor found with id" + id);
        }
        return optionalCart.get();
    }

    @Override
    public Cart findCartByUserId(Long userId) throws Exception {

        //User user = userService.findUserByJwtToken(jwt);
        return cartRepository.findByCustomerId(userId);

    }

    @Override
    public Cart clearCart(Long userId) throws Exception {
        
        Cart cart= findCartByUserId(userId);

        cart.getItem().clear();
        return cartRepository.save(cart);
    }
    
}
