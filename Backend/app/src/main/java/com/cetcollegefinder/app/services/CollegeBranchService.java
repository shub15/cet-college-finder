package com.cetcollegefinder.app.services;

import com.cetcollegefinder.app.dto.CollegeBranch;
import com.cetcollegefinder.app.repositories.CollegeBranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollegeBranchService {

    @Autowired
    private CollegeBranchRepository collegeBranchRepository;

    public List<CollegeBranch> getAllCollegeBranches() {
        return collegeBranchRepository.findAll();
    }

    public CollegeBranch saveCollegeBranch(CollegeBranch collegeBranch) {
        return collegeBranchRepository.save(collegeBranch);
    }

    public List<CollegeBranch> getBranchesByCollegeId(Long collegeId) {
        return collegeBranchRepository.findByCollegeId(collegeId);
    }
}
