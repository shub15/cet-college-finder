package com.cetcollegefinder.app.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCustomCollegeList {
    
    private List<Long> collegeIds;
    private String email;

    // Getters and Setters
}
