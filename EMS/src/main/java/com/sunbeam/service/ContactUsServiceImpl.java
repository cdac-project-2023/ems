package com.sunbeam.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.ContactUsDao;
import com.sunbeam.dto.ContactUsDto;
import com.sunbeam.entities.ContactUs;


@Transactional
@Service
public class ContactUsServiceImpl implements ContactUsService {

	@Autowired
	private ContactUsDao contactDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public ContactUsDto addMessageToEms(ContactUsDto contact) {
		   ContactUs mess = mapper.map(contact, ContactUs.class);
		   mess.setName(contact.getName());
		   mess.setEmail(contact.getEmail());
		   mess.setMessage(contact.getMessage());
		   ContactUs c1 = contactDao.save(mess);
		   return mapper.map(c1, ContactUsDto.class);
		
	}
	
}
