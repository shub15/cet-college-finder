package com.cetcollegefinder.app.services;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cetcollegefinder.app.dto.UserDTO;
import com.cetcollegefinder.app.repositories.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public UserDTO saveUserDTO(UserDTO user){
        return userRepo.save(user);
    }

    public List<UserDTO> getUsers(){
        return userRepo.findAll();
    }
    public UserDTO getUserById(int id){
        return userRepo.findById(id).orElse(null);
    }
    public UserDTO getUserByName(String name){
        return userRepo.findByName(name);
    }
    public String deleteUser(int id){
        userRepo.deleteById(id);
        return "User Deleted" + id;
    }

    public UserDTO updateUser(UserDTO user){
        UserDTO existingUser = userRepo.findById(user.getId()).orElse(null);
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());

        return userRepo.save(existingUser);
    }
}
