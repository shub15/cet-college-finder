package com.cetcollegefinder.app.repositories;

import com.cetcollegefinder.app.dto.College;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollegeRepository extends JpaRepository<College, Long> {
}
