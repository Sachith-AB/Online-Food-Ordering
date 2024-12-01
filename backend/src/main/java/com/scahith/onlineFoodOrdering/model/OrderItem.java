package com.scahith.onlineFoodOrdering.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Food food;

    private int quantity;

    private Long totalPrice;

    @ElementCollection
    private List<String> ingredients;

    private Boolean available;

    @ManyToOne
    private Resturant resturant;

    private Boolean isVegetarian;
    private Boolean isSeasonal;

    @ManyToMany
    private List<IngredientsItem> Ingredients = new ArrayList<>();

    private Date creationDate;
}
