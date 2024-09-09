package com.cetcollegefinder.app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.cetcollegefinder.app.dto.UserDTO;
// import com.cetcollegefinder.app.repositories.JdbcClientUserRepo;

@SpringBootApplication
public class AppApplication  {
	// public static final Logger log = LoggerFactory.getLogger(AppApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

	// @Override
	// public void run(String... args) {
	// 	System.out.println(db.getData());
	// }

	// @Bean
	// CommandLineRunner user(JdbcClientUserRepo userRepo){
	// 	return args -> {
	// 		UserDTO user = new UserDTO();
	// 		userRepo.create(user);
	// 	};
	// }

}
