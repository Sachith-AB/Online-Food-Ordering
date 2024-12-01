package com.scahith.onlineFoodOrdering.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scahith.onlineFoodOrdering.model.IngredientsCategory;
import com.scahith.onlineFoodOrdering.model.IngredientsItem;
import com.scahith.onlineFoodOrdering.request.IngredientRequest;
import com.scahith.onlineFoodOrdering.request.IngredientsCategoryRequest;
import com.scahith.onlineFoodOrdering.service.IngredientsService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientsController {
    
    @Lazy
    @Autowired
    private IngredientsService ingredientsService;

    @PostMapping("/category")
    public ResponseEntity<IngredientsCategory> createIngredientsCategory(@RequestBody IngredientsCategoryRequest req) throws Exception{
        IngredientsCategory item = ingredientsService.createIngredientsCategory(req.getName(), req.getResturantId());
        return new ResponseEntity<>(item,HttpStatus.CREATED);
    }

    @PostMapping()
    public ResponseEntity<IngredientsItem> createIngredientsitem(@RequestBody IngredientRequest req) throws Exception{
        IngredientsItem item = ingredientsService.createIngredientsItem(req.getResturantId(),req.getName(),req.getCategoryId());
        return new ResponseEntity<>(item,HttpStatus.CREATED);
    }

    @PutMapping("/{id}/stoke")
    public ResponseEntity<IngredientsItem> updateStoke(@PathVariable Long id) throws Exception{
        IngredientsItem item = ingredientsService.updateStock(id);
        return new ResponseEntity<>(item,HttpStatus.OK);
    }

    @GetMapping("/resturant/{id}")
    public ResponseEntity<List<IngredientsItem>> findResturantIngredients(@PathVariable Long id) throws Exception{
        List<IngredientsItem> item = ingredientsService.findResturantsIngredients(id);
        return new ResponseEntity<>(item,HttpStatus.OK);
    }

    @GetMapping("/resturant/{id}/category")
    public ResponseEntity<IngredientsCategory> findResturantIngredientsCategory(@PathVariable Long id) throws Exception{
        IngredientsCategory item = ingredientsService.findIngredientsCategoryById(id);
        return new ResponseEntity<>(item,HttpStatus.OK);
    }
}
