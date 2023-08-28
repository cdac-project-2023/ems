package com.sunbeam.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
//import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class GetAllBookingDto {
	private Long id;
	private String customerName;
	private int noOfGuest ;
	private LocalDate bookingDate;
	private LocalDate startDate;
	private LocalDate endDate;	
	private String venueName;
	private String equipment;
	private String foodType;
	private String event;
	private String status;
	
}
