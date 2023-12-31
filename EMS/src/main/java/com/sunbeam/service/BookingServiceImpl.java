package com.sunbeam.service;

import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.exception.ResourceNotFoundException;
import com.sunbeam.dao.BookingDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dao.VenueDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BookingDto;
import com.sunbeam.dto.GetAllBookingDto;
import com.sunbeam.entities.Booking;
import com.sunbeam.entities.StatusEnum;
import com.sunbeam.entities.User;
import com.sunbeam.entities.Venue;

@Transactional
@Service
public class BookingServiceImpl implements BookingService {
	@Autowired
	private BookingDao bookingDao;
	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private VenueDao venueDao;

	@Override
	public BookingDto updateBooking(Booking booking, Long BookingId) {

		Booking bk = this.bookingDao.findById(BookingId)
				.orElseThrow(() -> new ResourceNotFoundException("Booking is not found"));
		bk.setNoOfGuest(booking.getNoOfGuest());
		this.bookingDao.save(bk);
		return mapper.map(bk, BookingDto.class);
	}

//	@Override //Dont delete this code it contains all validation concept
//	public ApiResponse addBooking(BookingDto bookingDto, Long venueId, Long userId) {
//		
//		User user = this.userDao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User is not found"));
//		Venue venue = this.venueDao.findById(venueId).orElseThrow(() -> new ResourceNotFoundException("Venue is not found"));
//		Booking checkBook = this.bookingDao.findById(venueId).orElseThrow(() -> new ResourceNotFoundException("There is no booking for this Venue"));
//		Booking booked = mapper.map(bookingDto, Booking.class);
//		if(bookingDto.getEndDate().isBefore(bookingDto.getStartDate())) {
//			return new ApiResponse(false , "End date must be after Start date ");
//		}
//		else if(bookingDto.getStartDate().isAfter(checkBook.getStartDate()) && bookingDto.getStartDate().isBefore(checkBook.getEndDate())) {
//					
//			return new ApiResponse(false , "Venue is alreaddy booked for this date ");
//		}
//		else if(  bookingDto.getStartDate().isEqual(checkBook.getEndDate()) || bookingDto.getEndDate().isEqual(checkBook.getStartDate())) {
//			return new ApiResponse(false , "there might be alreay booking at your start or end date ");
//		}
//		else {
//		
//
//		booked.setUserBooking(user);
//		booked.setVenueId(venue);
//		booked.setBookingDate(LocalDate.now());
//		this.bookingDao.save(booked);
//
//		return new ApiResponse(true , "Venue is Booked");
//		}
//	}

	@Override
	public ApiResponse addBooking(BookingDto bookingDto, Long venueId, Long userId) {

		User user = this.userDao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User","userId",userId));
		Venue venue = this.venueDao.findById(venueId)
				.orElseThrow(() -> new ResourceNotFoundException("Venue is not found"));
		Booking booked = mapper.map(bookingDto, Booking.class);
		List<Booking> dates = bookingDao.findBookingSdateAndEdate(bookingDto.getStartDate(), bookingDto.getEndDate());
		if (dates.size() != 0) {
			return new ApiResponse("Booking not found", false );
		}

		else {

			booked.setUserBooking(user);
			booked.setVenueId(venue);
			booked.setBookingDate(LocalDate.now());
			this.bookingDao.save(booked);

			return new ApiResponse("Venue is Booked",true);
		}
	}

	@Override
	public ResponseEntity<?> cancelBooking(Long bookingId) {
		Booking bk = bookingDao.findById(bookingId)
				.orElseThrow(() -> new ResourceNotFoundException("Booking","bookingId",bookingId));
		LocalDate d = bk.getStartDate();

		long days = ChronoUnit.DAYS.between(LocalDate.now(), d);

		if (days > 10) {
			if (bk.getStatus().equals(StatusEnum.ACTIVE)) {
				bk.setStatus(StatusEnum.CANCELED);
			} else
				return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("There is no active booking",false));
//					return "there is no active booking";
		} else
			return ResponseEntity.status(HttpStatus.OK)
					.body(new ApiResponse("You will have to pay an extra amount",false));
//			  return "You will have to pay an extra amount";

		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("Your booking is cancelled\"",true));
//		  return "Your booking is cancelled";
	}

	@Override
	public List<GetAllBookingDto> getBooking() {

		Long count = (long) 1;

		List<User> user = userDao.findAll();

		List<GetAllBookingDto> getBooking = new ArrayList<>();

		for (User u : user) {
			System.out.println("=========User List========");
			System.out.println(u.getId() + " " + u.getFirstName());
			List<Booking> bookingList = u.getBookingList();

			for (Booking bk : bookingList) {

				System.out.println("=========Booking Lsst========");
				System.out.println(bk.getUserBooking().getFirstName() + " " + bk.getEvent());

				GetAllBookingDto bookingDto = new GetAllBookingDto();

				bookingDto.setId(count++);
				bookingDto
						.setCustomerName(bk.getUserBooking().getFirstName() + " " + bk.getUserBooking().getLastName());
				bookingDto.setNoOfGuest(bk.getNoOfGuest());
				bookingDto.setBookingDate(bk.getBookingDate());
				bookingDto.setStartDate(bk.getStartDate());
				bookingDto.setEndDate(bk.getEndDate());
				bookingDto.setVenueName(bk.getVenueId().getName());
				bookingDto.setEquipment(bk.getEquipment().toString());
				bookingDto.setFoodType(bk.getFoodType().toString());
				bookingDto.setEvent(bk.getEvent().toString());
				bookingDto.setStatus(bk.getStatus().toString());

				getBooking.add(bookingDto);
			}
			System.out.println("--------");
		}

		return getBooking;
	}

	@Override
	public List<BookingDto> getBookingById(Long userId) {
		User user = userDao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User","userId",userId));
		;

		List<Booking> allBooking = bookingDao.findByUserBooking(user);

		List<BookingDto> allDetails = new ArrayList<BookingDto>();
		
		List<BookingDto> allBookings = allBooking.stream().map((booking)->this.mapper.map(booking, BookingDto.class)).collect(Collectors.toList());

		for (Booking b : allBooking) {

			BookingDto allBookingsDto = new BookingDto();
			allBookingsDto.setNoOfGuest(b.getNoOfGuest());
			allBookingsDto.setStartDate(b.getStartDate());
			allBookingsDto.setEndDate(b.getEndDate());
			allBookingsDto.setEquipment(b.getEquipment().toString());
			allBookingsDto.setFoodType(b.getFoodType().toString());
			allBookingsDto.setEvent(b.getEvent().toString());
			allBookingsDto.setStatus(b.getStatus().toString());

			allDetails.add(allBookingsDto);
		}

		return allBookings;
	}

}
