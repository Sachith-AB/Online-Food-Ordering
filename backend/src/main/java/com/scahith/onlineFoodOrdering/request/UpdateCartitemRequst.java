package com.scahith.onlineFoodOrdering.request;

import lombok.Data;

@Data
public class UpdateCartitemRequst {
    private Long cartItemId;
    private int quantitiy;
}
