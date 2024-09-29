package com.cetcollegefinder.app.services;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cetcollegefinder.app.dto.College;
import com.cetcollegefinder.app.dto.UserDTO;
import com.cetcollegefinder.app.repositories.CollegeRepository;
import com.cetcollegefinder.app.repositories.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CollegeRepository collegeRepository;

    public UserDTO saveUserDTO(UserDTO user) {
        return userRepo.save(user);
    }

    public List<UserDTO> getUsers() {
        return userRepo.findAll();
    }

    public UserDTO getUserById(Long id) {
        return userRepo.findById(id).orElse(null);
    }

    public UserDTO getUserByName(String name) {
        return userRepo.findByName(name);
    }

    public UserDTO getUserByEmail(UserDTO user) {
        return userRepo.findByEmail(user.getEmail());
    }

    public Boolean authUser(UserDTO user) {
        UserDTO existingUser = userRepo.findByEmail(user.getEmail());
        if (existingUser != null) {
            String existingUserPassword = existingUser.getPassword();
            String userPassword = user.getPassword();
            return userPassword.equals(existingUserPassword);
        } else {
            return false;
        }
    }

    public String deleteUser(Long id) {
        userRepo.deleteById(id);
        return "User Deleted" + id;
    }

    public UserDTO updateUser(UserDTO user) {
        UserDTO existingUser = userRepo.findById(user.getId()).orElse(null);
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());

        return userRepo.save(existingUser);
    }

    public void saveCustomCollegeList(String username, List<Long> collegeIds) {
        UserDTO user = userRepo.findByEmail(username);

        List<College> colleges = collegeRepository.findAllById(collegeIds);
        user.setFavoriteColleges(colleges);

        userRepo.save(user);
    }

    public List<College> getUserFavoriteColleges(String username) {
        UserDTO user = userRepo.findByEmail(username);
        if (user == null) {
            System.out.println("User details are required.");
        }
        return user.getFavoriteColleges();
    }

}
