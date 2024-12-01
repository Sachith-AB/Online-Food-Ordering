package com.scahith.onlineFoodOrdering.service;

import com.scahith.onlineFoodOrdering.dto.ResturantDto;
import com.scahith.onlineFoodOrdering.model.Address;
import com.scahith.onlineFoodOrdering.model.Resturant;
import com.scahith.onlineFoodOrdering.model.User;
import com.scahith.onlineFoodOrdering.repository.AddressRepository;
import com.scahith.onlineFoodOrdering.repository.ResturantRepository;
import com.scahith.onlineFoodOrdering.repository.UserRepository;
import com.scahith.onlineFoodOrdering.request.CreateResturantRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ResturantServiceImp implements ResturantService {

    @Autowired
    private ResturantRepository resturantRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Resturant createResturant(CreateResturantRequest req, User user) {

        Address address = addressRepository.save(req.getAddress());

        Resturant resturant = new Resturant();
        resturant.setAddress(address);
        resturant.setContactInformation(req.getContactInformation());
        resturant.setCuisineType(req.getCuisineType());
        resturant.setDescription(req.getDescription());
        resturant.setImages(req.getImages());
        resturant.setName(req.getName());
        resturant.setOpeningHours(req.getOpeningHours());
        resturant.setRegistrationDate(LocalDateTime.now());
        resturant.setOwner(user);

        return resturantRepository.save(resturant);
    }

    @Override
    public Resturant updateResturant(Long resturantId, CreateResturantRequest updateResturantRequest) throws Exception {

        Resturant resturant = findResturantById(resturantId);

        if (resturant.getCuisineType() != null) {
            resturant.setCuisineType(updateResturantRequest.getCuisineType());
        }

        if (resturant.getDescription() != null) {
            resturant.setDescription(updateResturantRequest.getDescription());
        }

        if (resturant.getName() != null) {
            resturant.setName(updateResturantRequest.getName());
        }
        return resturantRepository.save(resturant);
    }

    @Override
    public void deleteResturant(Long resturantId) throws Exception {

        Resturant resturant = findResturantById(resturantId);

        if (resturant == null) {
            throw new Exception("Resturant not found");
        }

        resturantRepository.delete(resturant);

    }

    @Override
    public List<Resturant> getAllResturant() {
        return resturantRepository.findAll();
        // return List.of();
    }

    @Override
    public List<Resturant> searchResturant(String keyword) {
        return resturantRepository.findBySearchQuery(keyword);
    }

    @Override
    public Resturant findResturantById(Long id) throws Exception {

        Optional<Resturant> optionalResturant = resturantRepository.findById(id);

        if (optionalResturant.isEmpty()) {
            throw new Exception("Resturant not found");
        }
        return optionalResturant.get();
    }

    @Override
    public Resturant getResturantByUserId(Long userId) throws Exception {

        Resturant resturant = findResturantById(userId);

        if (resturant == null) {
            throw new Exception("Resturant not found");
        }
        return resturant;
    }

    @Override
    public ResturantDto addToFavorites(Long resturantId, User user) throws Exception {

        Resturant resturant = findResturantById(resturantId);

        ResturantDto resturantDto = new ResturantDto();

        resturantDto.setDescription(resturant.getDescription());
        resturantDto.setImages(resturant.getImages());
        resturantDto.setTitle(resturant.getName());
        resturantDto.setId(resturantId);

        boolean isFavorited = false;
        List<ResturantDto> favorites = user.getFavorites();
        for (ResturantDto favorite : favorites) {
            if (favorite.getId().equals(resturantId)) {
                isFavorited = true;
                break;
            }
        }

        if (isFavorited) {
            favorites.removeIf(favorite -> favorite.getId().equals(resturantId));
        } else {
            favorites.add(resturantDto);
        }

        userRepository.save(user);
        return resturantDto;
    }

    @Override
    public Resturant updateResturantStatus(Long id) throws Exception {

        Resturant resturant = findResturantById(id);
        resturant.setOpen(!resturant.isOpen());
        return resturantRepository.save(resturant);
    }
}
