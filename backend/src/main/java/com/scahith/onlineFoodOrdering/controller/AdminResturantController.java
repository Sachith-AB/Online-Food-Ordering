package com.scahith.onlineFoodOrdering.controller;

import com.scahith.onlineFoodOrdering.model.Resturant;
import com.scahith.onlineFoodOrdering.model.User;
import com.scahith.onlineFoodOrdering.request.CreateResturantRequest;
import com.scahith.onlineFoodOrdering.response.MessageResponse;
import com.scahith.onlineFoodOrdering.service.ResturantService;
import com.scahith.onlineFoodOrdering.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/resturant")
public class AdminResturantController {

    @Autowired
    private ResturantService resturantService;

    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<Resturant> createResturant(@RequestBody CreateResturantRequest createResturantRequest , @RequestHeader("Authorization") String token) throws Exception {
        User user = userService.findUserByJwtToken(token);

        Resturant resturant = resturantService.createResturant(createResturantRequest,user);
        return new ResponseEntity<Resturant>(resturant, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Resturant> updateResturant(@RequestBody CreateResturantRequest createResturantRequest , @RequestHeader("Authorization") String token , @PathVariable Long id) throws Exception {

        Resturant resturant = resturantService.updateResturant(id,createResturantRequest);
        return new ResponseEntity<Resturant>(resturant, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteResturant( @RequestHeader("Authorization") String token , @PathVariable Long id) throws Exception {
        userService.findUserByJwtToken(token);

        resturantService.deleteResturant(id);
        MessageResponse response = new MessageResponse();

        response.setMessage("Resturant deleted Successfully");
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Resturant> updateResturantStatus( @RequestHeader("Authorization") String token , @PathVariable Long id) throws Exception {
        userService.findUserByJwtToken(token);

        Resturant resturant = resturantService.updateResturantStatus(id);
        return new ResponseEntity<Resturant>(resturant, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<Resturant> findResturantByUserId( @RequestHeader("Authorization") String token , @PathVariable Long id) throws Exception {
        userService.findUserByJwtToken(token);

        Resturant resturant = resturantService.getResturantByUserId(id);
        return new ResponseEntity<Resturant>(resturant, HttpStatus.OK);
    }

}
