import { Delete, Edit} from "@mui/icons-material";
import { Button  } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import { createUrl, log } from "../utils/utils";
import { toast } from "react-toastify";

export default function AdminVenue(){

  const [venues,setVenues] = useState([])
  const [name,setName] = useState([]) 
  const [city , setCity] = useState([])
  const [state , setState] = useState([])
  const [costing , setCosting] = useState([])
  const [menuId , setMenuId] = useState([])
  const [description , setDescription] = useState([])
  
  
        

  useEffect(()=>{
    loadAllData();
},[])

  const loadAllData=async ()=>{
    try{
      const tokn = sessionStorage.getItem('token')
            const config = {
                headers:{Authorization:`Bearer ${tokn}`}
            }
        const response =await axios.get('http://localhost:6162/admin/venue',config)
        setVenues(response.data)
        }catch(error){
            console.error('Error fetching data: ',error);
        }
}

    const addVenue = async  ()=>{

      if (name.length === '') {
        toast.error('Please enter Venue name')
      } else  if (city.length === '') {
        toast.error('Please enter City')
      } else  if (state.length === '') {
        toast.error('Please enter State')
      } else if (costing.length === '') {
        toast.error('Please enter Costing')
      } 
    
        // const url = createUrl('/admin/addvenue')
        const body = {
             name, city, state, costing, description
        }
        try{
          const tokn = sessionStorage.getItem('token')
          const config = {
              headers:{Authorization:`Bearer ${tokn}`}
          }
            const response = await axios.post('http://localhost:6162/admin/addvenue',body,config)
            // update();
            loadAllData();
            document.getElementById("updateVenue").hidden=true
            log(response.data);
            return response.data
           // setUsers1(response.data)
        }catch(error){
            console.error('Error fetching data: ',error);
            return null;
        }
    }
  

    const update = ()=>{
        document.getElementById("updateVenue").hidden=true
  }
  
    const deleteVenue = async (venueId) => {
    try{
      console.log(venueId)
      const tokn = sessionStorage.getItem('token')
      const config = {
          headers:{Authorization:`Bearer ${tokn}`}
      }
      const response = await axios.delete(`http://localhost:6162/admin/deletevenue/${venueId}`,config)
      console.log(response);
      loadAllData();
    
    }catch(error){
      console.error('Error fetching data: ',error);
      return null;
    }
  }

  const editVenue = async (venueId) =>{
    const body = {
      name, city, state, costing, description
 }

    try {
      const tokn = sessionStorage.getItem('token')
      const config = {
          headers:{Authorization:`Bearer ${tokn}`}
      }
      const response = await axios.post(`http://localhost:6162/admin/updatevenue/${venueId}`, body,config)
      loadAllData();
      return response.data
    }catch(error){
      console.error('Error fetching data: ',error);
      return null;

    }
  }
  
  


    return  (
      <>
      <div id="updateVenue" hidden={true}>
          <h1 style={{ textAlign: 'center', margin: 10 }}>Add Venue</h1>
    
          <div className='row'>
            <div className='col'></div>
            <div className='col'>
              <div className='form'>
                
                <div className='mb-3'>
                  <label htmlFor=''>Venue Name</label>
                  <input
                    type='text'
                    className='form-control'
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor=''>Venue Description</label>
                  <input
                    type='text'
                    className='form-control'
                    onChange={(e) => {
                      setDescription(e.target.value)
                    }}
                    
                  />
                </div>
    
                <div className='mb-3'>
                  <label htmlFor=''>City</label>
                  <input
                    type='text'
                    className='form-control'
                    onChange={(e) => {
                      setCity(e.target.value)
                    }}
                  />
                </div>
    
                <div className='mb-3'>
                  <label htmlFor=''>State</label>
                  <input
                    type='text'
                    className='form-control'
                    onChange={(e) => {
                      setState(e.target.value)
                    }}
                  />
                </div>
    
                <div className='mb-3'>
                  <label htmlFor=''>Costing</label>
                  <input
                    type='number'
                    className='form-control'
                    onChange={(e) => {
                      setCosting(e.target.value)
                    }}
                  />
                </div>
    
                <div className='mb-3'>
                  <button id="registerButton" onClick={()=>{addVenue();}} className='btn btn-success'>
                    Register Venue
                  </button> <mb-4/>
                  <button id="updateButton" onClick={()=>{
                    document.getElementById("updateVenue").hidden=true
                    editVenue(menuId);}} className='btn btn-primary'>
                    Update Venue
                  </button>
                </div>
              </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
          <div className="container" style={{margin:20}}>
                  <select className="form-select" aria-label="Disabled select example" required style={{width:'300px'}}>
                      <option defaultValue>Select function</option>
                      <option value="1">Get All Venue List</option>
                      <option value="2">Get Venue by Name</option>
                  </select>
              </div>
              <div> 
              <button type="button" className="btn btn-warning"  onClick={()=>{
                document.getElementById("updateVenue").hidden=false
                document.getElementById("updateButton").hidden=true
                document.getElementById("registerButton").hidden=false
              }}>Add Venue</button>
              </div>
          <table className="table table-hover">
          <thead>
              <tr>
              <th scope="col">id</th>
              <th scope="col">Name Of Venue</th>
              <th scope="col">Description</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Costing</th>
              <th scope="col"></th> 

              </tr>
          </thead>
          <tbody>

              {
                  venues.map(e=>
              <tr>
              <th scope="row">{e.id}</th>
              <td>{e.name}</td>
              <td>{e.description}</td>
              <td>{e.city}</td>
              <td>{e.state}</td>
              <td>{e.costing}</td>
              <td><Button variant='contained' color="primary" startIcon={<Edit/>} onClick={()=>{
                document.getElementById("updateVenue").hidden=false
                document.getElementById("updateButton").hidden=false
                document.getElementById("registerButton").hidden=true
                setMenuId(e.id)
                }} >Edit</Button></td>
              <td><Button variant='contained' value={e.id} 
              onClick= {()=>{deleteVenue(e.id)}}
               color="error" startIcon={<Delete/>}>Delete</Button></td>
              </tr>)}
          </tbody>
          </table>
      </>
  )
}
