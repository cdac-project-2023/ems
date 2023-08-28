package com.sunbeam.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "cancellation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Cancellation extends BaseEntity{
	@Column(length = 255)
	private String reason;
	@Column(name = "description")
	private String description;
	@Column
	private double refundableAmount;
	@Column
	private LocalDate cncDate;
	
	@OneToOne(targetEntity = Booking.class,cascade = CascadeType.ALL )
	@JoinColumn(name = "bookingId")
	private int bookingId;

	@OneToOne(targetEntity = Bill.class,cascade = CascadeType.ALL )
	@JoinColumn(name = "billId")
	private int billId;
}
