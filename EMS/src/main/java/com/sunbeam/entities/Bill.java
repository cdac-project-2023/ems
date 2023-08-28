package com.sunbeam.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "bill")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Bill extends BaseEntity{
	
	@Column(length = 10)
	private int bookingId;
	
	@ManyToOne
	@JoinColumn(name = "userBillid")
	private User userBill;
	
	@Column(length = 10)
	private String paymentType;
	@Column
	private LocalDate billDate;
	@Column
	private double amount;
	@Column
	private double totalAmount;
	
	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true,mappedBy = "billId")
	private Cancellation cancel;
}
