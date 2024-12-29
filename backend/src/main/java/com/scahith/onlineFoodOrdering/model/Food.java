package com.scahith.onlineFoodOrdering.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;

    private Long price;

    @ManyToOne
    private Category category;

    @JsonIgnore
    @ManyToOne
    private Resturant resturant;

    @Column(length = 1000)
    @ElementCollection
    private List<String> images;

    @ManyToMany
    private List<IngredientsItem> ingredients = new ArrayList<>();

    @Column(columnDefinition = "DATETIME")
    private Date creationDate;

    private boolean isSeasonal;
    private boolean isVegitarian;
    private boolean isAvailable;
    private String image;
}
