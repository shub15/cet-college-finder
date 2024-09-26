package com.cetcollegefinder.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cetcollegefinder.app.dto.UserDTO;

public interface UserRepo extends JpaRepository<UserDTO, Long> {

    UserDTO findByName(String name);

    UserDTO findByEmail(String email);
}
