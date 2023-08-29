package com.sunbeam.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.exception.ResourceNotFoundException;
import com.sunbeam.dao.VenueDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.VenueDto;
import com.sunbeam.entities.Venue;
@Service
@Transactional
public class VenueServiceImpl implements VenueService {
	@Autowired
	private VenueDao venueDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse addVEnue(VenueDto venueDto) { //check this function through swagger it gives multiple rows in datdabases 
		  Long c =  (long) 0;
		    List<Venue> b = venueDao.findAll();
		    for(Venue n : b) {
		    	if(venueDto.getCity().equals(n.getCity())) {
		    		return new ApiResponse(false , "This Venue is already added");
		    	}		    		
		    }
		    Venue venue = this.mapper.map(venueDto, Venue.class);
		    venue.setId(++c);
    		this.venueDao.save(venue);		
		return new ApiResponse(true , "Venue is Added");
		
	}

	@Override
	public VenueDto updateVenue(VenueDto venueDto, Long venueId) {
	
		Venue ven = this.venueDao.findById(venueId).orElseThrow();
		
//		if(ven != null) {
//			ven.setCity(venueDto.getCity());
//			ven.setName(venueDto.getName());
//			ven.setState(venueDto.getState());
//			ven.setCosting(venueDto.getCosting());
//			venueDao.save(ven);
//			return 
//		}
		ven.setCity(venueDto.getCity());
		ven.setName(venueDto.getName());
		ven.setState(venueDto.getState());
		ven.setCosting(venueDto.getCosting());
		Venue updatedVenue = this.venueDao.save(ven);
		return this.mapper.map(updatedVenue, VenueDto.class);
	}

	@Override
	public ApiResponse deleteVenue(Long venueId) {
		

		Venue venue = this.venueDao.findById(venueId).orElseThrow(() -> new ResourceNotFoundException("There is no such Venue"));
		if(venue != null) {
			venueDao.deleteById(venueId);
		return new ApiResponse(true , "Venue Successfully Deleted");
		}else 
		return new ApiResponse(false , "There is no such venue");
	}

	@Override
	public List<VenueDto> getAllVenue() {
				
		List<Venue> venues= this.venueDao.findAll();
		List<VenueDto> venueDtos = venues.stream().map(venue->this.mapper.map(venue, VenueDto.class)).collect(Collectors.toList());
		
		return venueDtos;
	}

}
