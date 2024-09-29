package com.cetcollegefinder.app.controllers;

import com.cetcollegefinder.app.dto.College;
import com.cetcollegefinder.app.dto.CollegeBranch;
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

    // Existing college operations
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
            existingCollege.setWebsite(college.getWebsite());
            existingCollege.setDescription(college.getDescription());
            existingCollege.setCollegeType(college.getCollegeType());
            existingCollege.setRating(college.getRating());
            existingCollege.setBranches(college.getBranches());
            return collegeService.saveCollege(existingCollege);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteCollege(@PathVariable Long id) {
        collegeService.deleteCollege(id);
    }

    // New endpoints for branch and cutoff management

    @PostMapping("/{collegeId}/branches")
    public CollegeBranch createBranchForCollege(@PathVariable Long collegeId, @RequestBody CollegeBranch collegeBranch) {
        return collegeService.saveCollegeBranch(collegeId, collegeBranch);
    }

    // @PutMapping("/{collegeId}/branches/{branchId}")
    // public CollegeBranch updateBranchForCollege(@PathVariable Long collegeId, @PathVariable Long branchId, @RequestBody CollegeBranch updatedBranch) {
    //     return collegeService.updateCollegeBranch(collegeId, branchId, updatedBranch);
    // }

    @DeleteMapping("/{collegeId}/branches/{branchId}")
    public void deleteBranchForCollege(@PathVariable Long collegeId, @PathVariable Long branchId) {
        collegeService.deleteCollegeBranch(collegeId, branchId);
    }
}
