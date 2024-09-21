package com.cetcollegefinder.app.controllers;

import com.cetcollegefinder.app.dto.College;
import com.cetcollegefinder.app.services.CollegeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/colleges")
public class CollegeController {

    @Autowired
    private CollegeService collegeService;

    @GetMapping
    public List<College> getAllColleges() {
        return collegeService.getAllColleges();
    }

    @GetMapping("/{id}")
    public College getCollegeById(@PathVariable Long id) {
        return collegeService.getCollegeById(id);
    }

    @PostMapping
    public College createCollege(@RequestBody College college) {
        return collegeService.saveCollege(college);
    }

    @PutMapping("/{id}")
    public College updateCollege(@PathVariable Long id, @RequestBody College college) {
        College existingCollege = collegeService.getCollegeById(id);
        if (existingCollege != null) {
            existingCollege.setName(college.getName());
            existingCollege.setLocation(college.getLocation());
            existingCollege.setBranch(college.getBranch());
            existingCollege.setWebsite(college.getWebsite());
            existingCollege.setDescription(college.getDescription());
            existingCollege.setCollegeType(college.getCollegeType());
            existingCollege.setCutoff2023(college.getCutoff2023());
            existingCollege.setCutoff2022(college.getCutoff2022());
            existingCollege.setCutoff2021(college.getCutoff2021());
            existingCollege.setCutoff2020(college.getCutoff2020());
            existingCollege.setRating(college.getRating());
            return collegeService.saveCollege(existingCollege);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteCollege(@PathVariable Long id) {
        collegeService.deleteCollege(id);
    }
}
