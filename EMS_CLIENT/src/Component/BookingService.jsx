import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingService() {
  const [eventType,setEventType] = useState('');
  const [venue,setVenue] = useState('');
  const [guests,setGuest] = useState('');
  const [bookDet,setBookDet] = useState('');
  const [fromdate,setFromDate] = useState('')
  const [todate,setToDate] = useState('')


  const navigate = useNavigate()
  const showOrderDetails=()=>{
    navigate("/orderDetails")
  }
  const handleFoodT=(event)=>{
    debugger
    sessionStorage.setItem('footypeT',event.target.value);
  }
  const handleFoodC=(event)=>{
    debugger
    sessionStorage.setItem('footypeC',event.target.value);
  }
  return (
    <>
      <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label"  >
          Event Selected
        </label>
        <div className="col-sm-10">
          <input required
            type="text"
            readonly
            className="form-control-plaintext"
            id="staticEmail"
            value="Naming Ceremony"
            />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">
          Selected Venue
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readonly
            className="form-control-plaintext"
            id="staticEmail"
            value="Rangoli"
            />
        </div>
      </div>
      <div className="mb-3 row"  style={{marginTop:20}}>
        <label for="staticEmail" className="col-sm-2 col-form-label">
          No of Guest
        </label>
        <div className="col-sm-2">
          <input
            type="number"
            className="form-control"
            />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="No of Guest" className="col-sm-2 col-form-label">
          No of Guests
        </label>
        <div className="col-sm-10">
          <input type="number" className="form-control"/>
        </div>
      </div>

      <div className="mb-3 row">
        <label for="Booking Date" className="col-sm-2 col-form-label">
          Choose Date from
        </label>
        <div className="col-sm-2">
          <input type="date" className="form-control" id="inputPassword" />
        </div>
        <label for="Booking Date" className="col-sm-2 col-form-label">
          to
        </label>
        <div className="col-sm-2">
          <input type="date" className="form-control" id="inputPassword" />
        </div>
        <div className="form-check-square col-sm-1">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            />
          <label className="form-check-label" for="flexCheckDefault">
            Same date
          </label>
        </div>
      </div>
      <div className="row row-cols-lg-auto g-3 align-items-center">
        <label className="col-sm-2 col-form-label" for="flexCheckDefault">
          Choose Service
        </label>
        <div className="form-check form-check-inline col-sm">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            />
          <label className="form-check-label" for="inlineCheckbox1">
            Dj
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            />
          <label className="form-check-label" for="inlineCheckbox2">
            Lighting
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
            />
          <label className="form-check-label" for="inlineCheckbox3">
            Decoration
          </label>
        </div>
      </div>
      {/* fooding */}\
      <div className="row row-cols-lg-auto g-3 align-items-center">
        <label className="col-sm-2 col-form-label" for="specificSizeInputName">
          Select Food
        </label>
        <div className="col-sm-3">
          <label className="visually-hidden" for="specificSizeSelect">
            Preference
          </label>
          <select className="form-select" id="specificSizeSelect" onChange={handleFoodT}>
            <option defaultValue>Select Food Type</option>
            <option >Veg</option>
            <option >Non-Veg</option>
            <option >Both (Veg & Non-Veg)</option>
          </select>
        </div>
        <div className="col-sm-3">
          <label className="visually-hidden" for="specificSizeSelect">
            Preference
          </label>
          <select className="form-select" id="specificSizeSelect" onChange={handleFoodC}>
            <option defaultValue>Choose Category</option>
            <option >Regular Rate</option>
            <option >Delux</option>
            <option >Royal</option>
          </select>
        </div>
      </div>
      
      <div>
      </div>
      <div style={{marginTop:20}}>

      <Button variant="contained" className="btn btn" style={{margin:10}}>Previous</Button>
      <Button variant="contained" color="success" className="btn btn" onClick={showOrderDetails}>Next</Button>
      </div>

    </>
  );
}
