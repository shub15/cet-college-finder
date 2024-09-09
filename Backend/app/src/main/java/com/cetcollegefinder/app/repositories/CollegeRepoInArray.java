// package com.cetcollegefinder.app.repositories;

// import java.util.ArrayList;
// import java.util.List;
// import java.util.Optional;

// import org.springframework.stereotype.Repository;

// import com.cetcollegefinder.app.dto.CollegeDTO;

// import jakarta.annotation.PostConstruct;

// @Repository
// public class CollegeRepoInArray {
//     private List<CollegeDTO> colleges = new ArrayList<>();

//     public List<CollegeDTO> findAll() {
//         return colleges;
//     }

//     public Optional<CollegeDTO> findById(Integer id) {
//         return colleges.stream().filter(college -> college.id() == id).findFirst();
//     }

//     public void create(CollegeDTO college) {
//         colleges.add(college);
//     }

//     public void update(CollegeDTO college, Integer id) {
//         Optional<CollegeDTO> existingCollege = findById(id);
//         if (existingCollege.isPresent()) {
//             colleges.set(colleges.indexOf(existingCollege.get()), college);
//         }
//     }

//     public void delete(Integer id){
//         colleges.removeIf(colleges -> colleges.id().equals(id));
//     }

//     @PostConstruct
//     private void init() {
//         colleges.add(new CollegeDTO(1, "VJTI", "Matunga", "CSE", 200, 100));
//     }
// }
