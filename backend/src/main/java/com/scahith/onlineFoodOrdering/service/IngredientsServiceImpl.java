package com.scahith.onlineFoodOrdering.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.scahith.onlineFoodOrdering.model.IngredientsCategory;
import com.scahith.onlineFoodOrdering.model.IngredientsItem;
import com.scahith.onlineFoodOrdering.model.Resturant;
import com.scahith.onlineFoodOrdering.repository.IngredientsCategoryRepository;
import com.scahith.onlineFoodOrdering.repository.IngredientsItemRepository;

public class IngredientsServiceImpl implements IngredientsService {
    
    @Autowired
    private IngredientsItemRepository ingredientsItemRepository;

    @Autowired
    private IngredientsCategoryRepository ingredientsCategoryRepository;

    private ResturantService resturantService;

    @Override
    public IngredientsCategory createIngredientsCategory(String name, Long resturantId) throws Exception {

        Resturant resturant = resturantService.findResturantById(resturantId);
        IngredientsCategory category = new IngredientsCategory();

        category.setResturant(resturant);
        category.setName(name);
        return ingredientsCategoryRepository.save(category) ;
    }

    @Override
    public IngredientsCategory findIngredientsCategoryById(Long id) throws Exception {
        Optional<IngredientsCategory> opt = ingredientsCategoryRepository.findById(id);

        if(opt.isEmpty()){
            throw new Exception("Ingredients not found");
        }

        return opt.get();
    }

    @Override
    public List<IngredientsCategory> findIngredientsCategoryByResturantid(Long id) throws Exception {

        resturantService.findResturantById(id);
        return ingredientsCategoryRepository.findByResturantId(id);
    }

    @Override
    public IngredientsItem createIngredientsItem(Long resturantId, String ingredientsName, Long categoryId)throws Exception {
        Resturant resturant = resturantService.findResturantById(resturantId);
        IngredientsCategory category = findIngredientsCategoryById(categoryId);

        IngredientsItem item = new IngredientsItem();
        item.setName(ingredientsName);
        item.setResturant(resturant);
        item.setCategory(category);

        IngredientsItem ingredient = ingredientsItemRepository.save(item);
        category.getIngredients().add(ingredient);

        return ingredient;
    }

    @Override
    public List<IngredientsItem> findResturantsIngredients(Long id) throws Exception {

        return ingredientsItemRepository.findByResturantId(id);
    }

    @Override
    public IngredientsItem updateStock(Long id) throws Exception {
        Optional<IngredientsItem> optionalIngredientItem = ingredientsItemRepository.findById(id);

        if(optionalIngredientItem.isEmpty()){
            throw new Exception("Ingredients not found");
        }

        IngredientsItem ingredientsItem=optionalIngredientItem.get();
        ingredientsItem.setIsStoke(!ingredientsItem.getIsStoke());
        return ingredientsItemRepository.save(ingredientsItem);
    }
}
