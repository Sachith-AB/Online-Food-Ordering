package com.scahith.onlineFoodOrdering.service;

import com.scahith.onlineFoodOrdering.model.User;

public interface UserService {

    public User findUserByJwtToken(String token) throws Exception;

    public User findUserByEmail(String email) throws Exception;

}
