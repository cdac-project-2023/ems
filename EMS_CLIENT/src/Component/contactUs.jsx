import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {ContactUs as contactems} from './contactUs'
import { toast } from "react-toastify";
import axios from "axios";

function ContactUs(){

 const[name,setFirstName] = useState('')
 const[email,setEmail] = useState('')
 const[message,setMessage] = useState('')

 const navigate = useNavigate()
  
 const contactUsDetails = async ()=>{

    if(name.length == ''){
        toast.error('Please enter Name')
    } else if (email.length == ''){
        toast.error('Please enter Email')
    }else if (message.length == ''){
        toast.error('Please enter Message')
    }else {
    try{
        const response =await axios.post('http://localhost:8080/contactUs')
        if(response.data!=null){
          toast.success('You successfully contacted us ');
        }
    }catch(ex){
      console.log(ex);
    }
  }
 }
    return (
    <div>

        <h1 style={{ textAlign: 'center', margin: 10 }}>Contact Us</h1>

        <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Email </label>
              <input
                type='email'
                className='form-control'
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Message</label>
              <input style={{  height: '150px' }}
                type='text'
                className='form-control'
                onChange={(e) => {
                    setMessage(e.target.value)
                }}
              /> <br />

                <button onClick={contactUsDetails} className='btn btn-success'>
                Submit
              </button>
            </div>       
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
    );
}
export default ContactUs