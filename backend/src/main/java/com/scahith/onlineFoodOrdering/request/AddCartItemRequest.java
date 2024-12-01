package com.scahith.onlineFoodOrdering.request;

import java.util.List;

import lombok.Data;

@Data
public class AddCartItemRequest {
    private Long foodId;
    private int quantitiy;
    private List<String> ingredients;
}
