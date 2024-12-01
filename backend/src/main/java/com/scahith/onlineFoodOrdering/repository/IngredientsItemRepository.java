package com.scahith.onlineFoodOrdering.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scahith.onlineFoodOrdering.model.IngredientsItem;

public interface IngredientsItemRepository extends JpaRepository<IngredientsItem , Long> {

    List<IngredientsItem> findByResturantId(Long id) throws Exception;
} 