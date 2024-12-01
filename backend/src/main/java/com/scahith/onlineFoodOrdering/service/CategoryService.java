package com.scahith.onlineFoodOrdering.service;


import java.util.List;

import com.scahith.onlineFoodOrdering.model.Category;

public interface CategoryService {
    
    public Category createCategory(String name,Long userId) throws Exception;

    public Category findCategoryById(Long id) throws Exception;

    public List<Category> findCategorybyResturantId(Long id) throws Exception;


}
