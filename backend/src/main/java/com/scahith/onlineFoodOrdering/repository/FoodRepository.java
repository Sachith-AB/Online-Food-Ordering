package com.scahith.onlineFoodOrdering.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.scahith.onlineFoodOrdering.model.Food;

public interface FoodRepository extends JpaRepository<Food,Long> {

    List<Food> findByResturantId(Long resturantId);

    @Query("SELECT f FROM Food f WHERE f.name LIKE %:keyword% OR f.category.name LIKE %:keyword%")
    List<Food> searchFoods(@Param("keyword") String keyword);
}