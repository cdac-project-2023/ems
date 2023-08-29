// import { Button } from "@mui/material";
// import {Done} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Booking(){
    const[event,setEvent]=useState('');
    const [venues ,setVenues] = useState([]);
    const Navigator = useNavigate();
    const [selectedEvent, setSelectedEvent] = useState([]); // Initialize the state variable

  const handleEventChange =async (event) => {
    setSelectedEvent(event.target.value); // Update the state when an option is selected
    console.log(selectedEvent);
  };

    useEffect(()=>{
        loadData();
    },[])
    


    const book=()=>{
        Navigator("/bookingService")

    }
        
        const loadData=async ()=>{
            try{
                const tokn = sessionStorage.getItem('token')
                const config = {
                    headers:{Authorization:`Bearer ${tokn}`}
                }

            const response=await axios.get('http://localhost:6162/admin/venue',config);
            setVenues(response.data)
            }catch(error){
                console.error('Error fetching data: ',error);
            }
        }
    return <>
                <div className="container" style={{margin:20}}>
                    <select className="form-select" onChange={handleEventChange} // Call the function when an option is selected
                        value={selectedEvent}  aria-label="Disabled select example" required style={{width:'300px'}}>
                        <option defaultValue key={0}>Select Event</option>
                        <option value="Navratri" key={1} >Navratri</option>
                        <option value="Ganesh Utsav" key={2}>Ganesh Utsav</option>
                        <option value="Ring Ceremony" key={3}>Ring Ceremony</option>
                        <option value="Naming Ceremony" key={4}>Naming Ceremony</option>
                        <option value="Blood Donation" key={5}>Blood Donation</option>
                    </select>
                    <input type="text" hidden value={selectedEvent}/>
                </div>

                <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-evenly'}}>
                    {venues.map(ven =>
                        <div className="card mb-4" style={{width:'540px'}}>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img src="http://localhost:3000/Images/home2.webp" className="img-fluid rounded-start" alt="" style={{height:255,width:250}}/>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">{ven.name}</h5>
                                        <p className="card-text text-muted" style={{height:110}}>{ven.description}</p>
                                        <p className="card-text" style={{fontSize:18}}>Cost : <small style={{fontSize:20}}>{ven.costing}</small></p>
                                        <button className="btn btn-primary" style={{width:150,height:50}} onClick={()=>{book(ven.id)}}>Select</button>
                                    </div>
                                </div>
                            </div>
                        </div>)  }
                </div>
            </>
}