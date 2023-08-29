import React, { useState } from 'react'

export default function CustomerProfile(){
    var [user, setUser] = useState({ id:0,name: "", type: "", gender: "", emailid: "", dob: "", mobileNo: "", state: "", city: "", address: "", pincode: "" });
    var handleChange = (args) => {
        var copyOfUser = { ...user };
        copyOfUser[args.target.name] = args.target.value;
        setUser(copyOfUser);
    }

    const edit =()=>{

    }
    const update =()=>{
        
    }

    var [status, setStatus] = useState("display");
    return(
        <div className='card' style={{ boxShadow: "0px 0px 5px grey" }}>
            <div className='card-body'>
                <div className='row'>
                    <div className='col'>
                        <h3 className='card-title'>Information</h3>
                    </div>
                </div>
                <hr></hr>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h5>Full Name</h5>
                        <p className='text-muted'>{status == "display" ? user.name : <input type={'text'} className='form-control' name='name' value={user.name} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Blood Type</h5>
                        <p className='text-muted'>{user.type}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Gender</h5>
                        <p className='text-muted'>{user.gender}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h5>DOB</h5>
                        <p className='text-muted'>{status == "display" ? user.dob : <input type={'text'} className='form-control' name='dob' value={user.dob} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Mobile No</h5>
                        <p className='text-muted'>{status == "display" ? user.mobileNo : <input type={'text'} className='form-control' name='mobileNo' value={user.mobileNo} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>Email Id</h5>
                        <p className='text-muted'>{status == "display" ? user.emailid : <input type={'text'} className='form-control' name='emailid' value={user.emailid} onChange={handleChange}></input>}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h5>State</h5>
                        <p className='text-muted'>{status == "display" ? user.state : <input type={'text'} className='form-control' name='state' value={user.state} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>District</h5>
                        <p className='text-muted'>{status == "display" ? user.city : <input type={'text'} className='form-control' name='city' value={user.city} onChange={handleChange}></input>}</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5>PinCode</h5>
                        <p className='text-muted'>{status == "display" ? user.pincode : <input type={'text'} className='form-control' name='pincode' value={user.pincode} onChange={handleChange}></input>}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h5>
                            Address
                        </h5>
                        <p>
                            {status == "display" ? user.address : <input type={'text'} className='form-control' name='address' value={user.address} onChange={handleChange}></input>}
                        </p>
                    </div>
                </div>
                <br>
                </br>
                <div className='row justify-content-center'>
                    <div className='col-sm-2'>
                        {status == "display" ? <input type={'button'} className={"btn btn-primary"} value={"Edit Profile"} onClick={edit}></input> : <input type={'button'} className={"btn btn-primary"} value={"Update Profile"} onClick={update}></input>}
                    </div>
                </div>
            </div>
        </div>
    )
}