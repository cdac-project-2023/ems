import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AccountCircle,
  Login,
  PersonAdd,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Button1 from "./button1";
import { logout } from "../Features/authSlice";
// import sessionStorage from "redux-persist/es/storage/session";

function NavBar() {
  const dispatch=useDispatch();
  const [showProfile,setShowProfile] =useState('');
  const [usernamee,setusernamee] = useState('');
  useEffect(() => {
    async function retrieveFirstname() {
      const firstnameFromStorage = await sessionStorage.getItem('firstname');
      setusernamee(firstnameFromStorage);
    }

    retrieveFirstname();
  }, []);

  const Navigator = useNavigate();
  function toLogin() {
    Navigator("/login");
  }
  // const [modal,setModal] = useState(false);

  const logoutuser= ()=>{
    dispatch(logout());
    sessionStorage.removeItem('firstname');
    sessionStorage.removeItem('lastname');
    sessionStorage.removeItem("gender")
    sessionStorage.removeItem("city")
    sessionStorage.removeItem("dob")
    sessionStorage.removeItem("state")
    sessionStorage.removeItem("mobNo")
    sessionStorage.removeItem("email")
    
  }
  const toRegister = async() => {
    Navigator("/register");
  };
  return (
    <>
      <div className="container-fluid">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ marginBottom: 5 }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="##">
              EventGuru
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="##"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Events
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <h6
                        style={{
                          color: "coral",
                          marginLeft: 10,
                          textAlign: "center",
                        }}
                      >
                        Cultural Events
                      </h6>
                    </li>
                    <li>
                      <Link className="dropdown-item">Navratri</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">Ganesh Utsav</Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <h6
                        style={{
                          color: "coral",
                          marginLeft: 10,
                          textAlign: "center",
                        }}
                      >
                        Ceremony
                      </h6>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        style={{ color: "black" }}
                      >
                        Ring Ceremony
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">Namimg Ceremony</Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <h6
                        style={{
                          color: "coral",
                          marginLeft: 10,
                          textAlign: "center",
                        }}
                      >
                        Social Events
                      </h6>
                    </li>
                    <li>
                      <Link className="dropdown-item">Blood Donation</Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/booking"}>
                    Booking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/gallery"}>
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/aboutus"}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* <Button
                variant="contained"
                style={{ marginRight: 10 }}
                endIcon={<PersonAdd />}
                onClick={toRegister}
                // hidden={isLoggedIn}
              >
                Register
              </Button> */}
              {/* <Button
                variant="contained"
                style={{ marginRight: 10 }}
                endIcon={<Login />}
                onClick={toLogin}
              >
                Login
              </Button> */}

              <Dropdown >
      <Dropdown.Toggle  variant='primary' id="dropdown-basic" style={{maxWidth:200,width:150}}>
        Hello <AccountCircle/>
      </Dropdown.Toggle>
      <Dropdown.Menu container="body" style={{backgroundColor:'white',maxWidth:200,width:150}}>
        <Dropdown.Item  href="/profile">Profile</Dropdown.Item>
        <Dropdown.Item href="/" onClick={logoutuser}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      {/* <Button1/> */}

            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
