package com.scahith.onlineFoodOrdering.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scahith.onlineFoodOrdering.model.Category;
import com.scahith.onlineFoodOrdering.model.User;
import com.scahith.onlineFoodOrdering.service.CategoryService;
import com.scahith.onlineFoodOrdering.service.UserService;

@RestController
@RequestMapping("/api")
public class CategoryController {
    
    @Autowired
    private CategoryService categoryService;

    @Autowired
    private UserService userService;

    @PostMapping("/admin/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category , @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);

        Category createdCategory = categoryService.createCategory(category.getName(),user.getId());

        return new ResponseEntity<>(createdCategory,HttpStatus.CREATED);
    }

    @GetMapping("/category/resturant")
    public ResponseEntity<List<Category>> getResturantCategory( @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);

        List<Category> categories = categoryService.findCategorybyResturantId(user.getId());

        return new ResponseEntity<>(categories,HttpStatus.OK);
    }

    
}
