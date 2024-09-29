package com.cetcollegefinder.app.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class CutoffCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Open Category
    @Column(nullable = true)
    private Integer openRank;
    @Column(nullable = true)
    private Double openPercentile;

    // TFWS Category
    @Column(nullable = true)
    private Integer tfwsRank;
    @Column(nullable = true)
    private Double tfwsPercentile;

    // OBC Category
    @Column(nullable = true)
    private Integer obcRank;
    @Column(nullable = true)
    private Double obcPercentile;

    // MI Category
    @Column(nullable = true)
    private Integer miRank;
    @Column(nullable = true)
    private Double miPercentile;

    // EWS Category
    @Column(nullable = true)
    private Integer ewsRank;
    @Column(nullable = true)
    private Double ewsPercentile;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "college_branch_id")
    @JsonBackReference
    private CollegeBranch collegeBranch;

    // Getters and Setters
}
