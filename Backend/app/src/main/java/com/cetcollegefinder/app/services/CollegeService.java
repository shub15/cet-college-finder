package com.cetcollegefinder.app.services;

import com.cetcollegefinder.app.dto.College;
import com.cetcollegefinder.app.repositories.CollegeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollegeService {

    @Autowired
    private CollegeRepository collegeRepository;

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
}
