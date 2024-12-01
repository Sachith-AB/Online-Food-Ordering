package com.scahith.onlineFoodOrdering.service;

import java.util.List;
import java.util.Optional;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scahith.onlineFoodOrdering.model.Category;
import com.scahith.onlineFoodOrdering.model.Food;
import com.scahith.onlineFoodOrdering.model.Resturant;
import com.scahith.onlineFoodOrdering.repository.FoodRepository;
import com.scahith.onlineFoodOrdering.request.CreateFoodRequest;

@Service
public class FoodServiceImpl implements FoodService {

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public Food createFood(CreateFoodRequest req, Category Category, Resturant resturant) {

        Food food = new Food();
        food.setCategory(Category);
        food.setResturant(resturant);
        food.setDescription(req.getDescription());
        food.setImages(req.getImages());
        food.getName();
        food.setPrice(req.getPrice());
        food.setIngredients(req.getIngredients());
        food.setSeasonal(req.isSeasonal());

        Food savedFood = foodRepository.save(food);
        resturant.getFoods().add(savedFood);
        return savedFood;

    }

    @Override
    public void deleteFood(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setResturant(null);
        foodRepository.save(food);
    }

    @Override
    public List<Food> getResturantFood(
        Long resturantId, 
        boolean isVegitarian, 
        boolean isNonVeg, 
        boolean isSeasonal,
        String foodCategory) {
            List<Food> foods = foodRepository.findByResturantId(resturantId);

            if(isVegitarian){
                foods = filterByVegitarian(foods,isVegitarian);
            }
            if(isNonVeg){
                foods = filterByNonVeg(foods,isNonVeg);
            }
            if(isSeasonal){
                foods = filterByIsSeasonal(foods,isSeasonal);
            }
            if(foodCategory != null && !foodCategory.equals("")){
                foods = filterByCategory(foods,foodCategory);
            }
            return foods;
    }

    @Override
    public List<Food> searchFood(String keyword) {
        return foodRepository.searchFoods(keyword);
    }

    @Override
    public Food findFoodById(Long foodId) throws Exception {
        Optional<Food> optionalFood = foodRepository.findById(foodId);

        if(optionalFood.isEmpty()){
            throw new Exception("Food not exist");
        }
        return optionalFood.get();
    }

    @Override
    public Food updateAvailibilityStatus(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setAvailable(!food.isAvailable());
        return foodRepository.save(food);
    }

    private List<Food> filterByCategory(List<Food> foods, String foodCategory){

        return foods.stream().filter(food->{
                if(food.getCategory() != null){
                    return food.getCategory().getName().equals(foodCategory);
                }else{
                    return false;
                }
            }
        ).collect(Collectors.toList());
    }


    private List<Food> filterByIsSeasonal(List<Food> foods, boolean isSeasonal){
        
        return foods.stream().filter(food-> food.isSeasonal() == isSeasonal).collect(Collectors.toList());
    }

    private List<Food> filterByNonVeg(List<Food> foods, boolean isNonVeg){
        
        return foods.stream().filter(food-> food.isVegitarian() != false).collect(Collectors.toList());
    }

    private List<Food> filterByVegitarian(List<Food> foods, boolean isVegitarian){
        
        return foods.stream().filter(food-> food.isVegitarian() == isVegitarian).collect(Collectors.toList());
    }
    
}
