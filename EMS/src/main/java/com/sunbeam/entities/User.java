package com.sunbeam.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name= "user")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "password")
public class User extends BaseEntity{

	@Column(length = 20)
	private String firstName;
	
	
	@Column(length = 20)
	private String lastName;
	
	@Column(length = 10)
	private String gender;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	
	@Column(length = 20,unique = true)
	private String email;
	
	@Column(length = 15)
	private String mobNo;
	
	@Column(nullable = false)
	private String password;
	
	@Column(length = 20)
	private String State;
	
	@Column(length = 20)
	private String City;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Role role;
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true,mappedBy = "userBill")
	List<Bill> billList = new ArrayList<Bill>();
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true,mappedBy = "userBooking")
	List<Booking> bookingList  = new ArrayList<Booking>();
	
	@ManyToMany(cascade = CascadeType.ALL,mappedBy = "userList")
	List<Feedback> feedbackList  = new ArrayList<Feedback>();
	//private Feedback feedback;
	
//	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true,mappedBy = "userVenueId")
//	private Venue venue; 
	
	public void addBooking(Booking booking) {
		bookingList.add(booking);
		booking.setUserBooking(this);
	}
	
	
}