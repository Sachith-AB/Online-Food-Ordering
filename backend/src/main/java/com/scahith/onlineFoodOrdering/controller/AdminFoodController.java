package com.scahith.onlineFoodOrdering.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scahith.onlineFoodOrdering.model.Food;
import com.scahith.onlineFoodOrdering.model.Resturant;
import com.scahith.onlineFoodOrdering.request.CreateFoodRequest;
import com.scahith.onlineFoodOrdering.response.MessageResponse;
import com.scahith.onlineFoodOrdering.service.FoodService;
import com.scahith.onlineFoodOrdering.service.ResturantService;
import com.scahith.onlineFoodOrdering.service.UserService;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodController {
    
    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private ResturantService resturantService;

    @PostMapping
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest req, @RequestHeader("Authorization") String jwt) throws Exception{
        
        userService.findUserByJwtToken(jwt);
        Resturant resturant = resturantService.findResturantById(req.getResturantId());
        Food food = foodService.createFood(req, req.getCategory(), resturant);

        return new ResponseEntity<>(food,HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(@PathVariable Long id, @RequestHeader("Authorization") String jwt) throws Exception{
        
        userService.findUserByJwtToken(jwt);
        foodService.deleteFood(id);

        MessageResponse res = new MessageResponse();
        res.setMessage("food deleted");

        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Food> updateFoodAvailabilityStatus(@PathVariable Long id, @RequestHeader("Authorization") String jwt) throws Exception{
        
        userService.findUserByJwtToken(jwt);
        Food food = foodService.updateAvailibilityStatus(id);

        return new ResponseEntity<>(food,HttpStatus.OK);
    }

}
