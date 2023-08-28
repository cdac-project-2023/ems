package com.sunbeam.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BookingDto {
	private int noOfGuest ;
	private LocalDate startDate;
	private LocalDate endDate;	
	private String Equipment;
	private String foodType;
	private String event;
	private String status;
	
	
}
