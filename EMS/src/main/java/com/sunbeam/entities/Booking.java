package com.sunbeam.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "booking")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Booking extends BaseEntity{
//	@Column
//	private int serviceId;
	@Column
	private int noOfGuest;
	
	
	@Column
	private LocalDate bookingDate;
	
	@Column
	private LocalDate startDate;
	
	@Column
	private LocalDate endDate;

	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private StatusEnum status;
	
		
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private FoodCategory FoodType;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private EquipmentCategory Equipment;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private eventCode event;
	
	
	@ManyToOne(targetEntity = Venue.class,cascade = CascadeType.ALL)
	@JoinColumn(name = "venueId")
	private Venue venueId;
	
	
	@ManyToOne
	@JoinColumn(name = "userBookingId")
	private User userBooking;
	
	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true,mappedBy = "bookingId")
	private Cancellation cancel;	
}
