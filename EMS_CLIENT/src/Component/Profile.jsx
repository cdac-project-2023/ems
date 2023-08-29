import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  // const [user, setUser] = useState("");
  const [status,setStatus] = useState('display');
  const [user, setUser] = useState({
    firstName: sessionStorage.getItem('firstname'),
    lastName: sessionStorage.getItem('lastname'),
    email:sessionStorage.getItem('email'),
    password: "",
    gender:sessionStorage.getItem('gender'),
    dob:sessionStorage.getItem('dob'),
    mobNo:sessionStorage.getItem('mobNo'),
    city:sessionStorage.getItem('city'),
    state:sessionStorage.getItem('state')
  });

  var handleChange = (args) => {
    var copyOfUser = { ...user };
    copyOfUser[args.target.name] = args.target.value;
    setUser(copyOfUser);
}

const edit=()=>{
  setStatus({});
}

const update=()=>{
  setStatus("display");
}
  return (
    <>
      <div className='card' style={{ boxShadow: "0px 0px 5px grey",height:800, }}>
            <div className='card-body'>
                <div className='row'>
                    <div className='col'>
                        <h3 className='card-title'>Profile Information</h3>
                    </div>
                </div>
                <hr></hr>
                <div className='row' style={{margin:20}}>
                    <div className='col-sm-4'>
                        <h5>First Name</h5>
                        <p className='text-muted'>{status === "display" ? user.firstName : <input type={'text'} className='form-control' name='name' value={user.firstName} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Last Name</h5>
                        <p className='text-muted'>{status === "display" ? user.lastName : <input type={'text'} className='form-control' name='name' value={user.lastName} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Gender</h5>
                        <p className='text-muted'>{status === "display" ? user.gender : <input type={'text'} className='form-control' name='name' value={user.gender} onChange={handleChange}></input>}</p>
                    </div>
                </div>
                <div className='row' style={{margin:20}}>
                    <div className='col-sm-4'>
                        <h5>DOB</h5>
                        <p className='text-muted'>{status === "display" ? user.dob : <input type={'text'} className='form-control' name='dob' value={user.dob} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Mobile No</h5>
                        <p className='text-muted'>{status === "display" ? user.mobNo : <input type={'text'} className='form-control' name='mobNo' value={user.mobNo} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Email Id</h5>
                        <p className='text-muted'>{status === "display" ? user.email : <input type={'text'} className='form-control' name='emailid' value={user.email} onChange={handleChange}></input>}</p>
                    </div>
                </div>
                <div className='row' style={{margin:20}}>
                    <div className='col-sm-4'>
                        <h5>State</h5>
                        <p className='text-muted'>{status === "display" ? user.state : <input type={'text'} className='form-control' name='state' value={user.state} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>City</h5>
                        <p className='text-muted'>{status === "display" ? user.city : <input type={'text'} className='form-control' name='city' value={user.city} onChange={handleChange}></input>}</p>
                    </div>
                    
                </div>
                <br>
                </br>
                <div className='row justify-content-center'>
                    <div className='col-sm-2'>
                        {status === "display" ? <input type={'button'} className={"btn btn-primary"} value={"Edit Profile"} onClick={edit}></input> : <input type={'button'} className={"btn btn-primary"} value={"Update Profile"} onClick={update}></input>}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
