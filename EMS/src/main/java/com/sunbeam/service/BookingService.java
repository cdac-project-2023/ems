package com.sunbeam.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookingDto;
import com.sunbeam.dto.GetAllBookingDto;
import com.sunbeam.entities.Booking;

public interface BookingService {
//	BookingDto 
	ApiResponse addBooking(BookingDto booking,Long venueId,Long userId);
	ResponseEntity<?> cancelBooking( Long bookingId);
	BookingDto updateBooking(Booking booking,Long BookingId);
	List<GetAllBookingDto> getBooking(); 
	List<BookingDto> getBookingById(Long userId);
}
