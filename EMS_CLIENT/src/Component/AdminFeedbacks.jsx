import { Delete} from "@mui/icons-material";
import { Button  } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

export default function AdminFeedbacks(){

  const [users,setUsers] = useState([])
  const [counter,setCountner] = useState(0);

  useEffect(()=>{
    loadAllData();
},[])

  const loadAllData=async ()=>{
    try{

        const tokn = sessionStorage.getItem('token')
        const config = {
            headers:{Authorization:`Bearer ${tokn}`}
        }
        const response =await axios.get('http://localhost:6162/users/getAllFeedback',config)
        setUsers(response.data)
        }catch(error){
            console.error('Error fetching data: ',error);
        }
}

    return  (
      <>
          <div className="container" style={{margin:20}}>
                  <select className="form-select" aria-label="Disabled select example" required style={{width:'300px'}}>
                      <option selected>Select function</option>
                      <option value="1">Get All Bookings</option>
                      <option value="2">Get Booking by Id</option>
                  </select>
              </div>
          <table className="table table-hover">
          <thead>
              <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Venue Name</th>
              <th scope="col">Message</th>
              <th scope="col"></th> 

              </tr>
          </thead>
          <tbody>

              {
                  users.map(e=>
              <tr>
              {/* <th scope="row">{e.}</th> */}
              <td>{e.userName}</td>
              <td>{e.email}</td>
              <td>{e.venueName}</td>
              <td>{e.message}</td>
            
              <td><Button variant='contained' color="error" startIcon={<Delete/>}>Delete</Button></td>
              </tr>)}
          </tbody>
          </table>
      </>
  )
}