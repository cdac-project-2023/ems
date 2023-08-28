package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback, Long> {

}
