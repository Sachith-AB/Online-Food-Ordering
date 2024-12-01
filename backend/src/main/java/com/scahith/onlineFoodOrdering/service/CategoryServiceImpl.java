package com.scahith.onlineFoodOrdering.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scahith.onlineFoodOrdering.model.Category;
import com.scahith.onlineFoodOrdering.model.Resturant;
import com.scahith.onlineFoodOrdering.repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private ResturantService resturantService;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(String name, Long userId) throws Exception  {
        Resturant resturant = resturantService.findResturantById(userId);
        Category category = new Category();
        category.setName(name);
        category.setResturant(resturant);

        return categoryRepository.save(category);
    }

    @Override
    public Category findCategoryById(Long id) throws Exception {
        Optional<Category> optionalCategory=categoryRepository.findById(id);

        if(optionalCategory.isEmpty()){
            throw new Exception("Category not found");
        }
        return optionalCategory.get();
    }

    public List<Category> findCategorybyResturantId(Long id) throws Exception {
        Resturant resturant=resturantService.getResturantByUserId(id);
        return categoryRepository.findResturantById(resturant.getId());
    }
    

}
