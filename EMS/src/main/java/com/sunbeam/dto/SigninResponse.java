package com.sunbeam.dto;

import com.sunbeam.entities.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class SigninResponse {
	private Long id;
	private String firstName;
	private String lastName;
	private String gender;
	private String email;
	private String mobNo;
	private String state;
	private String city;
	private String role;
	private String jwt;
	private String status; 
	
	public SigninResponse()
	{
		super();
	}
	
	public SigninResponse(User curruser, String jwt,String status){
        this.id = curruser.getId();
        this.email = curruser.getEmail();
        this.firstName=curruser.getFirstName();
        this.lastName = curruser.getLastName();
        this.gender = curruser.getGender();
        this.mobNo = curruser.getMobNo();
        this.city=curruser.getCity();
        this.state=curruser.getState();
        this.role=curruser.getRole().toString();
        this.jwt = jwt;
        this.status=status;
    }
}
