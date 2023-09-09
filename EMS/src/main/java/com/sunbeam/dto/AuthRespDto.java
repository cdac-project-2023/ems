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
public class AuthRespDto {
	private Long id;
	private String firstName;
	private String lastName;
	private String gender;
	private String email;
	private String mobNo;
	private LocalDate dob;
	private String state;
	private String city;
	private String role;
	private String status;
	private String jwt;
	
}
