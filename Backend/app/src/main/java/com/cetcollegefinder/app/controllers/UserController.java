package com.cetcollegefinder.app.controllers;

import org.springframework.web.bind.annotation.RestController;
import com.cetcollegefinder.app.dto.UserDTO;
import com.cetcollegefinder.app.services.UserService;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

//operations
//GET /colleges
//POST /colleges
//DELETE /colleges/id

@RestController
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping("/adduser")
    public UserDTO addUser(@RequestBody UserDTO user){
        return service.saveUserDTO(user);
    }
    @GetMapping("/users")
    public List<UserDTO> findAllUsers(){
        return service.getUsers();
    }
    @GetMapping("/user/{id}")
    public UserDTO findUserById(@PathVariable int id){
        return service.getUserById(id);
    }
    @GetMapping("/user/{name}")
    public UserDTO findUserByName(@PathVariable String name){
        return service.getUserByName(name);
    }
    @PutMapping("/update")
    public UserDTO updateUser(@RequestBody UserDTO user){
        return service.updateUser(user);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable int id){
        return service.deleteUser(id);
    }

}
