package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.AuthRequestDto;
import com.sunbeam.dto.AuthRespDto;
import com.sunbeam.dto.RegisterUserDto;
import com.sunbeam.dto.UpdateUserDto;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserFeedbackDTO;
import com.sunbeam.dto.feedbackDto;

public interface UserService {

		RegisterUserDto registerUser(RegisterUserDto request);
		List<UserDto> showAllUser();
		String deleteUser(Long id);
//		String updateUser(User user,Long id);
		AuthRespDto logIn(AuthRequestDto req);
		ApiResponse updateUser(UpdateUserDto updateReq);
		feedbackDto addFeedback(feedbackDto feedbackdto  ,Long venueId , Long userId);
		feedbackDto updateFeedback(feedbackDto feedbackdto  , Long feedbackId ,Long userId);
		
		List<UserFeedbackDTO> getAllFeedbacks();
}
