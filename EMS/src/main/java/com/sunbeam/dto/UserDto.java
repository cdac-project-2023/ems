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
public class UserDto {
	private Long id;
	private  String name;
//	private String lastName;
	private String email;
	private LocalDate dob;
	private String mobNo;
	private String gender;
	private String city;
	private String state;

}
