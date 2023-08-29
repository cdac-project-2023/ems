package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.VenueDto;


public interface VenueService {
	VenueDto addVEnue(VenueDto venue);
	VenueDto updateVenue(VenueDto venueDto,Long venueId);
	ApiResponse deleteVenue(Long VenueId);
	List<VenueDto> getAllVenue();
}
