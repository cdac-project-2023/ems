
package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.AuthRequestDto;
import com.sunbeam.dto.AuthRespDto;
import com.sunbeam.dto.BookingDto;
import com.sunbeam.dto.RegisterUserDto;
import com.sunbeam.dto.UpdateUserDto;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.feedbackDto;
import com.sunbeam.service.BookingService;
import com.sunbeam.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userservice;

	@Autowired
	private BookingService bookingService;

	public UserController() {
		System.out.println("in User Controller");
	}

	@GetMapping
	public List<UserDto> getAllUser() { // Use ResponseEntity for this
		return userservice.showAllUser();
	}

	@PostMapping("/update")
	public ResponseEntity<?> updateEmpDetails(@RequestBody UpdateUserDto updateReq) {
		System.out.println("in update " + updateReq);
		System.out.println("in update emp " + updateReq.getId());
		return ResponseEntity.status(HttpStatus.OK).body(userservice.updateUser(updateReq));
	}

	@PostMapping("/addFeedback/{userId}/{venueId}")
	public feedbackDto addFeedback(@RequestBody feedbackDto feedbackdto, @PathVariable Long venueId,
			@PathVariable Long userId) {
		return userservice.addFeedback(feedbackdto, venueId, userId);
	}

	@PutMapping("/updateFeedback/{feedbackId}/{userId}")
	public feedbackDto modifyFeedback(@RequestBody feedbackDto feedbackdto, @PathVariable Long feedbackId,
			@PathVariable Long userId) {
		return userservice.updateFeedback(feedbackdto, feedbackId, userId);
	}

	@GetMapping("/bookings/{userId}")
	public ResponseEntity<?> allFeedbacksById(@PathVariable Long userId) {

		List<BookingDto> bdto = null;

		bdto = bookingService.getBookingById(userId);
		if (bdto.size() != 0) {
			return ResponseEntity.status(HttpStatus.OK).body(bdto);
		}
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("User Not Found",false));
	}

}
