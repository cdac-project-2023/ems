package com.sunbeam.entities;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "venue")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Venue extends BaseEntity{
	@Column(length = 25)
	private String name;
	@Column(length=25)
	private String city;
	@Column(length=25)
	private String state;
	@Column
	private String imageName;
	@Column(length=300)
	private String description;
	@Column
	private double costing;
	
//	@OneToOne(targetEntity = User.class, cascade = CascadeType.ALL )
//	@JoinColumn(name = "userVenueId")
//	private String userVenueId;
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true,mappedBy = "venueId")
	List<Booking> booking = new ArrayList<Booking>();

	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true,mappedBy = "venue")
	List<Feedback> feedback = new ArrayList<Feedback>();

}
