package com.cetcollegefinder.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cetcollegefinder.app.dto.College;
import com.cetcollegefinder.app.dto.UserDTO;
import com.cetcollegefinder.app.services.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/user")
public class UserCustomListController {

    @Autowired
    private UserService userService;

    @PostMapping("/college-list")
    public ResponseEntity<?> saveCustomCollegeList(@RequestBody List<Long> collegeIds, UserDTO userDetails) {
        String username = userDetails.getUsername();
        userService.saveCustomCollegeList(username, collegeIds);
        return ResponseEntity.ok("Custom college list saved!");
    }

    @GetMapping("/college-list")
    public List<College> getUserCollegeList(UserDTO userDetails) {
        String username = userDetails.getUsername();
        return userService.getUserFavoriteColleges(username);
    }
}
