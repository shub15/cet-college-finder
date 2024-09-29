package com.cetcollegefinder.app.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CollegeBranch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long collegeBranchId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "college_id")
    @JsonBackReference // Prevent cyclic serialization
    private College college;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id")
    @JsonBackReference // Prevent cyclic serialization
    private Branch branch;

    // Transient field to hold the branch name for serialization
    @Transient
    private String branchName;

    @PostLoad
    public void loadBranchName() {
        if (this.branch != null) {
            this.branchName = this.branch.getBranchName(); // Load the branch name after entity is loaded
        }
    }

    // One-to-One relationship with CutoffCategory
    @OneToOne(mappedBy = "collegeBranch", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference // This side owns the relationship
    private CutoffCategory cutoffCategories;

    // Getters and Setters
}
