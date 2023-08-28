package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "contactUs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ContactUs extends BaseEntity {

		@Column(length = 20)
		private String name;
		
		@Column(length = 20)
		private String email;
		
		@Column
		private String message;
}
