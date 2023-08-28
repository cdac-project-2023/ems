package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Venue;

public interface VenueDao extends JpaRepository<Venue, Long> {

}
