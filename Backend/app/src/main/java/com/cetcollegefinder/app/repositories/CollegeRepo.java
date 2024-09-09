// package com.cetcollegefinder.app.repositories;

// import java.util.List;
// import java.util.Optional;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.jdbc.core.simple.JdbcClient;
// import org.springframework.stereotype.Repository;

// import com.cetcollegefinder.app.dto.CollegeDTO;

// @Repository
// public class CollegeRepo {
//     private static final Logger log = LoggerFactory.getLogger(CollegeRepo.class);
//     private final JdbcClient jdbcClient;

//     public CollegeRepo(JdbcClient jdbcClient) {
//         this.jdbcClient = jdbcClient;
//     }

//     public List<CollegeDTO> findAll() {
//         return jdbcClient.sql("select * from CollegeList")
//                 .query(CollegeDTO.class)
//                 .list();
//     }

//     public Optional<CollegeDTO> findByParams(String location) {
//         return jdbcClient.sql("select * from CollegeList where location= :location").param("location", location)
//                 .query(CollegeDTO.class).optional();
//     }

// }
