package com.scahith.onlineFoodOrdering.controller;

import com.scahith.onlineFoodOrdering.dto.ResturantDto;
import com.scahith.onlineFoodOrdering.model.Resturant;
import com.scahith.onlineFoodOrdering.model.User;
import com.scahith.onlineFoodOrdering.service.ResturantService;
import com.scahith.onlineFoodOrdering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resturant")
class ResturantController {

    @Autowired
    private ResturantService resturantService;

    @Autowired
    private UserService userService;

    @GetMapping("/search")
    public ResponseEntity<List<Resturant>> searchResturant(@RequestHeader("Authorization") String token , @RequestParam String keyword ) throws Exception {
        userService.findUserByJwtToken(token);

        List<Resturant> resturant = resturantService.searchResturant(keyword);
        return new ResponseEntity<>( resturant, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Resturant>> getAllResturant(@RequestHeader("Authorization") String token  ) throws Exception {
        userService.findUserByJwtToken(token);

        List<Resturant> resturant = resturantService.getAllResturant();
        return new ResponseEntity<>( resturant, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Resturant> findResturantById(@RequestHeader("Authorization") String token , @PathVariable Long id) throws Exception {
        userService.findUserByJwtToken(token);

        Resturant resturant = resturantService.findResturantById(id);
        return new ResponseEntity<>( resturant, HttpStatus.OK);
    }

    @PutMapping("/{id}/add-favorite")
    public ResponseEntity<ResturantDto> addofavorite(@RequestHeader("Authorization") String token , @PathVariable Long id) throws Exception {
        User user = userService.findUserByJwtToken(token);

        ResturantDto resturant = resturantService.addToFavorites(id,user);
        return new ResponseEntity<>( resturant, HttpStatus.OK);
    }
}
