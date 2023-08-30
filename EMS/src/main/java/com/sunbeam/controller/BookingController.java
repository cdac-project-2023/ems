package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookingDto;
import com.sunbeam.dto.GetAllBookingDto;
import com.sunbeam.service.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	@PostMapping("/{userId}/{venueId}")
	public ApiResponse addBooking(@RequestBody BookingDto bk,@PathVariable Long venueId,@PathVariable Long userId){
		return this.bookingService.addBooking(bk,venueId,userId);
	}
	
	
	@PutMapping("/Cancel_Booking/{bookingId}")
	public ResponseEntity<?> cancelBooking(@PathVariable  Long bookingId) {
		return  ResponseEntity.status(HttpStatus.OK).body( bookingService.cancelBooking( bookingId));
	}
	
	
}
