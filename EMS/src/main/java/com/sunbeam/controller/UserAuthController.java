package com.sunbeam.controller;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.RegisterUserDto;
import com.sunbeam.dto.SigninRequest;
import com.sunbeam.dto.SigninResponse;
import com.sunbeam.entities.User;
import com.sunbeam.jwt_utils.JwtUtils;
import com.sunbeam.service.UserService;

@RestController
@RequestMapping("/auth")
public class UserAuthController {
//dep :
	@Autowired
	private AuthenticationManager mgr;
	@Autowired
	private JwtUtils utils;
	@Autowired
	private UserDao userDao;
	@Autowired
	private UserService userService;

	/*
	 * request payload : Auth req DTO : email n password resp payload : In case of
	 * success : Auth Resp DTO : mesg + JWT token + SC 200 IN case of failure : SC
	 * 401
	 */
	@PostMapping("/signIn")
	public ResponseEntity<SigninResponse> signIn(@RequestBody @Valid SigninRequest request) {
		System.out.println("in sign in " + request);
		// invoke autheticate(...) of Authenticate for auth
		Authentication principal = mgr
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		// generate JWT
		String jwtToken = utils.generateJwtToken(principal);
		User curruser = this.userDao.findByEmail(request.getEmail()).get();
		return ResponseEntity.status(HttpStatus.OK).body(new SigninResponse(curruser,jwtToken,"success"));
//		return new ResponseEntity.ok(HttpStatus.OK)).body(
//				new SigninResponse(jwtToken, "success"));
	}
	@PostMapping("/signUp")
	public ResponseEntity<?> registerUser(@RequestBody RegisterUserDto request)
	{
		System.out.println("in hire emp "+request);
		
        RegisterUserDto registerUserDto = null;
        registerUserDto = userService.registerUser(request);

        if(registerUserDto != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse(true,"User Registered sucessfully"));
        }
		 return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse(false,"User Not Registered"));
	}
}