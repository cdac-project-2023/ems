package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookingDto;
import com.sunbeam.dto.GetAllBookingDto;
import com.sunbeam.entities.Booking;

public interface BookingService {
//	BookingDto 
	ApiResponse addBooking(BookingDto booking,Long venueId,Long userId);
	String cancelBooking( Long bookingId);
	BookingDto updateBooking(Booking booking,Long BookingId);
	List<GetAllBookingDto> getBooking(); 
}
