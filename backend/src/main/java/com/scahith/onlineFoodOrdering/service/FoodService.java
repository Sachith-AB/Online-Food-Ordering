package com.scahith.onlineFoodOrdering.service;

import java.util.List;

import com.scahith.onlineFoodOrdering.model.Category;
import com.scahith.onlineFoodOrdering.model.Food;
import com.scahith.onlineFoodOrdering.model.Resturant;
import com.scahith.onlineFoodOrdering.request.CreateFoodRequest;

public interface FoodService {

    public Food createFood(CreateFoodRequest req, Category Category, Resturant resturant);

    void deleteFood(Long foodId) throws Exception;
    
    public List<Food> getResturantFood(
        Long resturantId,
        boolean isVegitarian, 
        boolean isNonVeg,
        boolean isSeasonal , 
        String foodCategory);

    public List<Food> searchFood(String keyword);

    public Food findFoodById(Long foodId) throws Exception;

    public Food updateAvailibilityStatus(Long foodId) throws Exception;
} 