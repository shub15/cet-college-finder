// package com.cetcollegefinder.app.controllers;

// import org.springframework.web.bind.annotation.RestController;
// import com.cetcollegefinder.app.dto.CollegeDTO;
// import com.cetcollegefinder.app.exception.CollegeNotFoundException;
// import com.cetcollegefinder.app.repositories.CollegeRepo;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestMapping;


//operations
//GET /colleges
//POST /colleges
//DELETE /colleges/id

// @RestController
// @RequestMapping("/api/colleges")
// public class CollegeController {
//     private final CollegeRepo collegeRepo;

//     public CollegeController(CollegeRepo collegeRepo) {
//         this.collegeRepo = collegeRepo;
//     }

    // @GetMapping(path = "")
    // public CollegeDTO getColleges() {
    //     return new CollegeDTO(1, "VJTI", "Matunga", "CSE", 200, 100);
    // }

    // @GetMapping(path = "")
    // List<CollegeDTO> findAll() {
    //     return collegeRepo.findAll();
    // }

    // @GetMapping("/{location}")
    // CollegeDTO findById(@PathVariable String location) {
    //     Optional<CollegeDTO> college = collegeRepo.findByParams(location);;
    //     if (college.isEmpty()) {
    //         throw new CollegeNotFoundException();
    //     }
    //     return college.get();
    // }

    // @ResponseStatus(HttpStatus.CREATED)
    // //post
    // @PostMapping("/")
    // void create(@Valid @RequestBody CollegeDTO college) {
    //     collegeRepo.create(college);
    // }

    // @ResponseStatus(HttpStatus.NO_CONTENT)
    // //put
    // @PutMapping("/{id}")
    // void update(@Valid @RequestBody CollegeDTO college, @PathVariable Integer id){
    //     collegeRepo.update(college, id);
    // }

    // @ResponseStatus(HttpStatus.NO_CONTENT)
    // @DeleteMapping("/{id}")
    // void delete(@PathVariable Integer id){
    //     collegeRepo.delete(id);
    // }
    
// }
