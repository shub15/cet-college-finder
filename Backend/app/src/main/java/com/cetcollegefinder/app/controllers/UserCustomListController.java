package com.cetcollegefinder.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cetcollegefinder.app.dto.College;
import com.cetcollegefinder.app.dto.UserCustomCollegeList;
import com.cetcollegefinder.app.dto.UserDTO;
import com.cetcollegefinder.app.services.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/user")
public class UserCustomListController {

    @Autowired
    private UserService userService;

    @PostMapping("/college-list")
    public ResponseEntity<?> saveCustomCollegeList(@RequestBody UserCustomCollegeList userDetails) {
        List<Long> collegeIds = userDetails.getCollegeIds();
        String username = userDetails.getEmail();
        if (username == null) {
            return ResponseEntity.badRequest().body("User details are required.");
        }
        userService.saveCustomCollegeList(username, collegeIds);
        return ResponseEntity.ok("Custom college list saved!");
    }

    @PostMapping("/my-college-list")
    public List<College> getUserCollegeList(@RequestBody UserDTO userDetails) {
        String username = userDetails.getEmail();
        return userService.getUserFavoriteColleges(username);
    }
}
