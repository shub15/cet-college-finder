package com.cetcollegefinder.app.services;

import com.cetcollegefinder.app.dto.College;
import com.cetcollegefinder.app.dto.CollegeBranch;
import com.cetcollegefinder.app.repositories.CollegeBranchRepository;
import com.cetcollegefinder.app.repositories.CollegeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollegeService {

    @Autowired
    private CollegeRepository collegeRepository;

    @Autowired
    private CollegeBranchRepository collegeBranchRepository;

    public List<College> getAllColleges() {
        return collegeRepository.findAll();
    }

    public College getCollegeById(Long id) {
        return collegeRepository.findById(id).orElse(null);
    }

    public College saveCollege(College college) {
        return collegeRepository.save(college);
    }

    public void deleteCollege(Long id) {
        collegeRepository.deleteById(id);
    }

    // Operations for CollegeBranch
    public CollegeBranch saveCollegeBranch(Long collegeId, CollegeBranch collegeBranch) {
        College college = getCollegeById(collegeId);
        if (college != null) {
            collegeBranch.setCollege(college);
            return collegeBranchRepository.save(collegeBranch);
        }
        return null;
    }

    // public CollegeBranch updateCollegeBranch(Long collegeId, Long branchId, CollegeBranch updatedBranch) {
    //     College college = getCollegeById(collegeId);
    //     if (college != null) {
    //         CollegeBranch existingBranch = collegeBranchRepository.findById(branchId).orElse(null);
    //         if (existingBranch != null) {
    //             existingBranch.setBranch(updatedBranch.getBranch());
    //             existingBranch.setCutoffCategories(updatedBranch.getCutoffCategories());
    //             return collegeBranchRepository.save(existingBranch);
    //         }
    //     }
    //     return null;
    // }

    public void deleteCollegeBranch(Long collegeId, Long branchId) {
        College college = getCollegeById(collegeId);
        if (college != null) {
            collegeBranchRepository.deleteById(branchId);
        }
    }
}
