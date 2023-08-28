package com.sunbeam.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "feedback") // to specify table name
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Feedback extends BaseEntity{
	@Column(length = 20 )
	private String email;
	
	@Column
	private String subject;
	
	@Column
	private String message;
	
	@ManyToMany(targetEntity = User.class)
	@JoinColumn(name = "userfeedbackid")
//	private User userfeedback;
	List<User> userList  = new ArrayList<User>();
	
	private Long rating;
	
	@ManyToOne( targetEntity = Venue.class )
	@JoinColumn(name = "venueId")
	private Venue venue;
}
