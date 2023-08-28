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
public class feedbackDto {

		private String message;
		private Long rating;
		private String subject;
			
	
}


