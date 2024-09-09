// package com.cetcollegefinder.app;

// import java.io.IOException;
// import java.io.InputStream;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.stereotype.Component;

// import com.cetcollegefinder.app.repositories.JdbcClientUserRepo;
// import com.fasterxml.jackson.databind.ObjectMapper;

// import aj.org.objectweb.asm.TypeReference;

// @Component
// public class UserJsonDataLoader implements CommandLineRunner {
//     private static final Logger log = LoggerFactory.getLogger(UserJsonDataLoader.class);
//     private final JdbcClientUserRepo userRepo;
//     private final ObjectMapper objectMapper;

//     public UserJsonDataLoader(JdbcClientUserRepo userRepo, ObjectMapper objectMapper) {
//         this.userRepo = userRepo;
//         this.objectMapper = objectMapper;
//     }

//     @Override
//     public void run(String... args) throws Exception {
//         if (userRepo.count() == 0) {
//             try (InputStream inputStream = TypeReference.class.getResourceAsStream("/data/users.json")) {
//                 Users allUsers = objectMapper.readValue(inputStream, Users.class);
//                 log.info("Reading users fron JSON data" + allUsers.users().size());
//                 userRepo.saveAll(allUsers.users());
//             } catch (IOException e) {
//                 throw new RuntimeException("Failed to read JSON data", e);
//             }
//         } else {
//             log.info("Not loading users from JSON data because the collection contains data.");
//         }
//     }
// }
