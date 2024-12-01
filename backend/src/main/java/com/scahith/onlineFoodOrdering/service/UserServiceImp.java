package com.scahith.onlineFoodOrdering.service;

import com.scahith.onlineFoodOrdering.config.JwtProvider;
import com.scahith.onlineFoodOrdering.model.User;
import com.scahith.onlineFoodOrdering.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String token) throws Exception {

        String email = jwtProvider.getEmailFromJwtToken(token);
        User user = userRepository.findByEmail(email);

        return user;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {

        User user = userRepository.findByEmail(email);

        if(user == null){
            throw new Exception("User not found");
        }
        return user;
    }
}
