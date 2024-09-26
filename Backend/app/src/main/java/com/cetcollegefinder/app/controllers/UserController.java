package com.cetcollegefinder.app.controllers;

import org.springframework.web.bind.annotation.RestController;
import com.cetcollegefinder.app.dto.UserDTO;
import com.cetcollegefinder.app.services.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

//operations
//GET /colleges
//POST /colleges
//DELETE /colleges/id

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping("/add")
    public UserDTO addUser(@RequestBody UserDTO user) {
        return service.saveUserDTO(user);
    }
    @GetMapping("/users")
    public List<UserDTO> findAllUsers() {
        return service.getUsers();
    }

    @GetMapping("/{id}")
    public UserDTO findUserById(@PathVariable Long id) {
        return service.getUserById(id);
    }

    @GetMapping("/userbyname/{name}")
    public UserDTO findUserByName(@PathVariable String name) {
        return service.getUserByName(name);
    }

    @GetMapping("/userbyemail")
    public UserDTO findUserByEmail(@RequestBody UserDTO user) {
        return service.getUserByEmail(user);
    }

    @PostMapping("/auth")
    public Boolean auth(@RequestBody UserDTO user) {
        return service.authUser(user);
    }

    @PutMapping("/update")
    public UserDTO updateUser(@RequestBody UserDTO user) {
        return service.updateUser(user);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        return service.deleteUser(id);
    }

}
