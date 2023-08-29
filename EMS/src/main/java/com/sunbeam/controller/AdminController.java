package com.sunbeam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.VenueDto;
import com.sunbeam.service.VenueService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private VenueService vnService;
	
	@GetMapping("/venue")
	public List<VenueDto> getAllVenue(){
		return this.vnService.getAllVenue();
	}
	
	@PostMapping("/addvenue")
	public ApiResponse addVenue(@RequestBody  VenueDto ven) {
		return this.vnService.addVEnue(ven);
	}
	
	@PostMapping("/updatevenue/{venueId}")
	public VenueDto updateVenue(@RequestBody VenueDto venDto, @PathVariable Long venueId) {
		
		return this.vnService.updateVenue(venDto, venueId);
	}
	
	@DeleteMapping("/deletevenue/{venId}")
	public ApiResponse removeVenue(@PathVariable Long venId) {
		return this.vnService.deleteVenue(venId);
	}
}
