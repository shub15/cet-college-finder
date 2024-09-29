package com.cetcollegefinder.app.repositories;

import com.cetcollegefinder.app.dto.CutoffCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CutoffCategoryRepository extends JpaRepository<CutoffCategory, Long> {
}
