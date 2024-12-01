package com.scahith.onlineFoodOrdering.request;

import lombok.Data;

@Data
public class IngredientsCategoryRequest {
    private String name;
    private Long resturantId;
}
