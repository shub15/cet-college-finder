package com.cetcollegefinder.app.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class College {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String location;
    private String branch;
    private String website;
    private String description;
    private String collegeType;
    private Double cutoff2023;
    private Double cutoff2022;
    private Double cutoff2021;
    private Double cutoff2020;
    private Double rating;

    // Getters and Setters
}
