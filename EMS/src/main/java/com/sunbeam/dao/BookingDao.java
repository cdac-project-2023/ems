package com.sunbeam.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Booking;

@Repository
public interface BookingDao extends JpaRepository<Booking, Long>{

//	@Query("SELECT b FROM Booking b WHERE b.start_date = :start_date AND b.end_date = :end_date")	
//	Booking findBookingSdateAndEdate(@Param("sdate") LocalDate start_date , @Param("edate") LocalDate end_date );
	
	@Query("SELECT b FROM Booking b WHERE b.startDate = :start_date AND b.endDate = :end_date")
	List<Booking> findBookingSdateAndEdate(@Param("start_date") LocalDate startDate, @Param("end_date") LocalDate endDate);

}


