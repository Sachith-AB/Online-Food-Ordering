package com.scahith.onlineFoodOrdering.service;


import com.scahith.onlineFoodOrdering.dto.ResturantDto;
import com.scahith.onlineFoodOrdering.model.Resturant;
import com.scahith.onlineFoodOrdering.model.User;
import com.scahith.onlineFoodOrdering.request.CreateResturantRequest;

import java.util.List;


public interface ResturantService {

    public Resturant createResturant(CreateResturantRequest req, User user);

    public Resturant updateResturant(Long resturantId , CreateResturantRequest updateResturantRequest) throws Exception;

    public void deleteResturant(Long resturantId) throws Exception;

    public List<Resturant> getAllResturant();

    public List<Resturant> searchResturant(String keyword);

    public Resturant findResturantById(Long id) throws Exception;

    public Resturant getResturantByUserId(Long userId) throws Exception;

    public ResturantDto addToFavorites(Long resturantId,User user) throws Exception;

    public Resturant updateResturantStatus(Long id) throws Exception;

}
