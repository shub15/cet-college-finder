package com.cetcollegefinder.app.repositories;

import com.cetcollegefinder.app.dto.CollegeBranch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollegeBranchRepository extends JpaRepository<CollegeBranch, Long> {
    
    // Custom method to get all branches for a given college
    List<CollegeBranch> findByCollegeId(Long collegeId);
}
