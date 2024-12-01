package com.scahith.onlineFoodOrdering.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.scahith.onlineFoodOrdering.model.Food;
import com.scahith.onlineFoodOrdering.service.FoodService;
import com.scahith.onlineFoodOrdering.service.UserService;

@RestController
@RequestMapping("/api/food")
public class FoodController {
    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;


    @PostMapping
    public ResponseEntity<List<Food>> searchFood(@RequestParam String name, @RequestHeader("Authorization") String jwt) throws Exception{
        
        userService.findUserByJwtToken(jwt);
        List<Food> food = foodService.searchFood(name);

        return new ResponseEntity<>(food,HttpStatus.OK);
    }

    @PostMapping("/resturant/{resturantId}")
    public ResponseEntity<List<Food>> getResturantFood(@RequestParam boolean vegitarian, @RequestParam boolean seasonal,@RequestParam boolean nonVeg,@RequestParam(required = false) String food_category, @PathVariable Long resturantId, @RequestHeader("Authorization") String jwt) throws Exception{
        
        userService.findUserByJwtToken(jwt);
        List<Food> food = foodService.getResturantFood(resturantId, vegitarian, nonVeg, seasonal, food_category);

        return new ResponseEntity<>(food,HttpStatus.OK);
    }
}
