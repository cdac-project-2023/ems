import { AccountCircle } from "@mui/icons-material";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function Button1(){

    const dispatch=useDispatch();
    const logout=async()=>{
        sessionStorage.removeItem('firstname');
        sessionStorage.removeItem('lastname');
        // sessionStorage.removeItem("gender")
        // sessionStorage.removeItem("city")
        // sessionStorage.removeItem("dob")
        // sessionStorage.removeItem("state")
        // sessionStorage.removeItem("mobNo")
        // sessionStorage.removeItem("email")
        dispatch(logout());
        // Navigator("/login")
        
      }


    return(
        <>
       <div><Dropdown >
      <Dropdown.Toggle  variant='primary' id="dropdown-basic" style={{maxWidth:200}}>
        Hello, Aditya <AccountCircle/>
      </Dropdown.Toggle>
      <Dropdown.Menu container="body" style={{backgroundColor:'white',maxWidth:200}}>
        <Dropdown.Item  href="/profile">Profile</Dropdown.Item>
        <Dropdown.Item href="/login" onClick={logout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>
        </>
    );
}

