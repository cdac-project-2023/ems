package com.sunbeam.service;


import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.exception.ResourceNotFoundException;
import com.sunbeam.dao.FeedbackDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dao.VenueDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.AuthRequestDto;
import com.sunbeam.dto.AuthRespDto;
import com.sunbeam.dto.RegisterUserDto;
import com.sunbeam.dto.UpdateUserDto;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserFeedbackDTO;
import com.sunbeam.dto.feedbackDto;
import com.sunbeam.entities.Feedback;
import com.sunbeam.entities.Role;
import com.sunbeam.entities.User;
import com.sunbeam.entities.Venue;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userdao;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private VenueDao venuedao;

	@Autowired
	private FeedbackDao feedDao;

//	 @Autowired
//	 private Feedback feed;

	@Override
	public List<UserDto> showAllUser() {
//		userdao.findAll().forEach(i -> System.out.println(i));
		 List<User> l = userdao.findAll();
		 List<UserDto> listDto = new ArrayList<>();
		 for( User u : l) {
//			   List<UserDto>  allList = listDto.add(u);
			 UserDto ud = new UserDto();
			 ud.setId(u.getId());
			 ud.setName(u.getFirstName()+ " " + u.getLastName());
			 ud.setEmail(u.getEmail());
			 ud.setDob(u.getDob());
			 ud.setMobNo(u.getMobNo());
			 ud.setGender(u.getGender());
			 ud.setCity(u.getCity());
			 ud.setState(u.getState());
			 
			 listDto.add(ud);
		 }
		return listDto;
	}

	@Override
	public String deleteUser(Long id) {
		userdao.deleteById(id);
		return "User Deleted Successfully";
	}

	@Override
	public AuthRespDto logIn(AuthRequestDto req) {
		AuthRespDto respUser = null;
		User user = userdao.findByEmail(req.getEmail())
				.orElse(null);

		if (user != null) {
			boolean flag = passwordEncoder.matches(req.getPassword(), user.getPassword());
			if (flag) {
				respUser = mapper.map(user, AuthRespDto.class);
			}
		}
		return respUser;
	}

	@Override
	public RegisterUserDto registerUser(RegisterUserDto request) {
		User user = mapper.map(request, User.class);
		user.setPassword(passwordEncoder.encode(request.getPassword()));		
		user.setRole(Role.CUSTOMER);
		User user1 = userdao.save(user);
		return mapper.map(user1, RegisterUserDto.class);
	}

	@Override
	public ApiResponse updateUser(UpdateUserDto updateReq) {

		User user = userdao.findById(updateReq.getId()).orElse(null);

		if (user != null) {
			user.setFirstName(updateReq.getFirstName());
			user.setLastName(updateReq.getLastName());
			user.setPassword(passwordEncoder.encode(updateReq.getPassword()));
			user.setMobNo((updateReq.getMobNo()));
//	            user.setGender(updateReq.getGender());
//	            user.setModifiedAt(LocalDateTime.now());
			userdao.save(user);
			return new ApiResponse(true, "User Updated Successfully");
		}
		return new ApiResponse(false, "User Not Updated");
	}

	@Override
	public feedbackDto addFeedback(feedbackDto feedbackdto, Long venueId, Long userId) {
		User user = this.userdao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User is not found"));
		Venue venue = this.venuedao.findById(venueId)
				.orElseThrow(() -> new ResourceNotFoundException("Venue is not found"));
		Feedback feedback = mapper.map(feedbackdto, Feedback.class);

		feedback.setMessage(feedbackdto.getMessage());
		feedback.setRating(feedbackdto.getRating());
		feedback.setSubject(feedbackdto.getSubject());
		feedback.setEmail(user.getEmail());
		feedback.getUserList().add(user);
		user.getFeedbackList().add(feedback);
		feedback.setVenue(venue);
		feedDao.save(feedback);

		return mapper.map(feedback, feedbackDto.class);
	}

	@Override
	public feedbackDto updateFeedback(feedbackDto feedbackdto, Long feedbackId, Long userId) {

		Feedback feed = feedDao.findById(feedbackId)
				.orElseThrow(() -> new ResourceNotFoundException("feedback is not found"));
		User user = userdao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User is not found"));
		List<User> list = feed.getUserList();
		List<Long> userIdList = new ArrayList<>();

		
		for(User u : list) {
			userIdList.add(u.getId());
		}
		
		if (userIdList.contains(userId))
		{
		feed.setMessage(feedbackdto.getMessage());
		feed.setSubject(feedbackdto.getSubject());
		feed.setRating(feedbackdto.getRating());
		user.getFeedbackList().add(feed);
		feedDao.save(feed);
		return mapper.map(feed, feedbackDto.class);
		}
		else
			throw new ResourceNotFoundException("User is not found");


	}
	
	
	
 public List<UserFeedbackDTO> getAllFeedbacks(){
	 
	 Long count = (long) 1 ;
	 List<User> userList = userdao.findAll();
	 
	 List<UserFeedbackDTO> feedbackList = new ArrayList<>();
	 
	 for (User user : userList) {
		 
		 System.out.println("----user----");
		 System.out.println(user.getId() + " " + user.getFirstName());
		 
		 List<Feedback> listFB = user.getFeedbackList();
		 
		
		 
		 
		 System.out.println("----fblist----");
		 for(Feedback fb : listFB) {
			 
			 UserFeedbackDTO dto = new UserFeedbackDTO();
			 System.out.println(fb.getId() + " ");
			 
			 dto.setUserId(count++);
			 dto.setUserName(user.getFirstName() + " " + user.getLastName());
			 dto.setEmail(fb.getEmail());
			 dto.setVenueName(fb.getVenue().getName());
			 dto.setMessage(fb.getMessage());
			 
			 feedbackList.add(dto);
		 }
		 System.out.println("--------");
	 }
	 
	 return feedbackList;
 }

}
