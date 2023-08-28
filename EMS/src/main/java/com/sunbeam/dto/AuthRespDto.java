package com.sunbeam.dto;

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
	private String state;
	private String city;
}