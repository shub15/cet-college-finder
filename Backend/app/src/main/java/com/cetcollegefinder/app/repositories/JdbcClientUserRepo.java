// package com.cetcollegefinder.app.repositories;

// import java.util.List;
// import java.util.Optional;

// import org.modelmapper.internal.util.Assert;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.jdbc.core.simple.JdbcClient;
// import org.springframework.stereotype.Repository;

// import com.cetcollegefinder.app.dto.UserDTO;

// import jakarta.validation.Valid;

// @Repository
// public class JdbcClientUserRepo {
//     private static final Logger log = LoggerFactory.getLogger(CollegeRepo.class);
//     private final JdbcClient jdbcClient;

//     public JdbcClientUserRepo(JdbcClient jdbcClient) {
//         this.jdbcClient = jdbcClient;
//     }

//     public List<UserDTO> findAll() {
//         return jdbcClient.sql("select * from Users")
//                 .query(UserDTO.class)
//                 .list();
//     }

//     public Optional<UserDTO> findByParams(String email) {
//         return jdbcClient.sql("select * from Users where email= :email").param("email", email)
//                 .query(UserDTO.class).optional();
//     }

//     public void create(UserDTO user) {
//         var update = jdbcClient.sql("INSERT INTO Users (email, password, name) VALUES (?,?,?)")
//                 .param(List.of(user.getEmail(), user.getPassword(), user.getName())).update();
//         Assert.state(update == 1, "Failed to create user " + user.getName());
//     }

//     public void update(@Valid UserDTO user, Integer email) {
//         var update = jdbcClient.sql("UPDATE Users set email=?, password=?, name=? where email=?")
//                 .param(List.of(user.getEmail(), user.getPassword(), user.getName())).update();
//         Assert.state(update == 1, "Failed to update user " + user.getName());
//     }

//     public void delete(Integer email) {
//         var update = jdbcClient.sql("DELETE from Users where email= :email")
//                 .param("email", email).update();
//         Assert.state(update == 1, "Failed to delete user " + email);
//     }

//     public int count() {
//         return jdbcClient.sql("select * from Users").query().listOfRows().size();
//     }

//     public void saveAll(List<UserDTO> users) {
//         users.stream().forEach(this::create);
//     }

//     public List<UserDTO> findByEmail(String email) {
//         return jdbcClient.sql("select * from Users where email = :email")
//                 .param("email", email).query(UserDTO.class)
//                 .list();
//     }
// }
