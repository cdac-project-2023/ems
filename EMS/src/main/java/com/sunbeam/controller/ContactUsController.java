package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.ContactUsDto;
import com.sunbeam.service.ContactUsService;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth/contactUs")
public class ContactUsController {
	@Autowired
	private ContactUsService contactUs;
	
	@PostMapping
	public ContactUsDto addMesg(@RequestBody ContactUsDto c1) {
		return contactUs.addMessageToEms(c1);
	}
}
