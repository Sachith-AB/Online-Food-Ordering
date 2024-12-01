package com.scahith.onlineFoodOrdering.request;

import com.scahith.onlineFoodOrdering.model.Address;

import lombok.Data;

@Data
public class OrderRequest {
    private Long resturnatId;
    private Address deliveryAddress;
}
