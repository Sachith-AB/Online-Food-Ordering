package com.scahith.onlineFoodOrdering.request;

import java.util.List;

import com.scahith.onlineFoodOrdering.model.Category;
import com.scahith.onlineFoodOrdering.model.IngredientsItem;

import lombok.Data;

@Data
public class CreateFoodRequest {
    
    private String name;
    private String description;
    private Long price;
    
    private Category category;
    private List<String> images;

    private Long resturantId;
    private boolean isVegitarian;
    private List<IngredientsItem> ingredients;
    private boolean isSeasonal;
}
