package com.scahith.onlineFoodOrdering.service;

import com.scahith.onlineFoodOrdering.model.Order;
import com.scahith.onlineFoodOrdering.response.PaymentResponse;

public interface PaymentService {

    public PaymentResponse createPaymentLink(Order order);
}