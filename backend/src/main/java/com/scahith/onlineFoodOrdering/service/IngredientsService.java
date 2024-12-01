package com.scahith.onlineFoodOrdering.service;

import java.util.List;

import com.scahith.onlineFoodOrdering.model.IngredientsCategory;
import com.scahith.onlineFoodOrdering.model.IngredientsItem;



public interface IngredientsService {
    
    public IngredientsCategory createIngredientsCategory(String name,Long resturantId) throws Exception;

    public IngredientsCategory findIngredientsCategoryById(Long id) throws Exception;
    
    public List<IngredientsCategory> findIngredientsCategoryByResturantid(Long id) throws Exception;

    public IngredientsItem createIngredientsItem(Long resturantId, String ingredientsName, Long categoryId) throws Exception;

    public List<IngredientsItem> findResturantsIngredients(Long id) throws Exception;

    public IngredientsItem updateStock(Long id) throws Exception;

}
