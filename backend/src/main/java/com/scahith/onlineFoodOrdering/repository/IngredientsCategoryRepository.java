package com.scahith.onlineFoodOrdering.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scahith.onlineFoodOrdering.model.IngredientsCategory;

public interface IngredientsCategoryRepository extends JpaRepository<IngredientsCategory,Long> {

    List<IngredientsCategory> findByResturantId(Long id);
    
}
