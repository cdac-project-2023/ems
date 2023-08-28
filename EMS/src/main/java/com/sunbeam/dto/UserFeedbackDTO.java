package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserFeedbackDTO {
	
	private Long userId;
	
	private String userName;
	
	private String email;
	
	private String venueName;
	
	private String message;
	
	
	
	

}
