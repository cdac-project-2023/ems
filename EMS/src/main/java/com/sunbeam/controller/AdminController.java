package com.sunbeam.controller;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.GetAllBookingDto;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.VenueDto;
import com.sunbeam.service.BookingService;
import com.sunbeam.service.IFileService;
import com.sunbeam.service.UserService;
import com.sunbeam.service.VenueService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private VenueService vnService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private IFileService fileService;
	
	@Value("${project.image}")
	private String path;
	
	@GetMapping("/venue")
	public List<VenueDto> getAllVenue(){
		return this.vnService.getAllVenue();
	}
	
	@PostMapping("/addvenue")
	public VenueDto addVenue(@RequestBody  VenueDto ven) {
		return this.vnService.addVenue(ven);
	}
	@GetMapping("/getusers")
	public List<UserDto> getAllUser(){  //Use ResponseEntity for this 
		return userService.showAllUser();
	}
	
	@DeleteMapping("/deleteuser/{uid}")
	public String deleteUser(@PathVariable Long uid) {
		return userService.deleteUser(uid);
	}
	
	@PostMapping("/updatevenue/{venueId}")
	public VenueDto updateVenue(@RequestBody VenueDto venDto, @PathVariable Long venueId) {
		
		return this.vnService.updateVenue(venDto, venueId);
	}
	
	@DeleteMapping("/deletevenue/{venId}")
	public ApiResponse removeVenue(@PathVariable Long venId) {
		return this.vnService.deleteVenue(venId);
	}
	@GetMapping("/getAllFeedback")
	  public ResponseEntity<?> getAllFeedbacks(){
		  
		  return ResponseEntity.status(HttpStatus.OK).body(userService.getAllFeedbacks());
	  }
	
	@GetMapping("/showBookings")
	public List<GetAllBookingDto> showBookings() {
		return bookingService.getBooking();
	}
	@PostMapping("/venue/image/upload/{venueId}")
	public ResponseEntity<VenueDto> uploadPostImage(@PathVariable Long venueId,@RequestParam("image") MultipartFile image) throws IOException{
		VenueDto venueDto=this.vnService.getVenueById(venueId);
		String fileName = this.fileService.uploadImage(path,image);
		System.out.println(fileName);
		venueDto.setImageName(fileName);
		VenueDto updatePost = this.vnService.updateVenue(venueDto, venueId);
		return new ResponseEntity<VenueDto>(updatePost,HttpStatus.OK);
	}
}
