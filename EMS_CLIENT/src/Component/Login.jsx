// import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import { loginFailure, loginStart, loginSuccess } from '../Features/userSlice';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Service/user';
import { login } from '../Features/authSlice';
// import { login } from '../Features/authSlice';
// import { type } from '@testing-library/user-event/dist/type';

export default function Login(){
    const [Cred, setCred] = useState({ email: "", password: "" });
    const [curEmail, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const navigate = useNavigate();
const dispatch = useDispatch();

      const loginfun=async()=>{
        // console.log("mohit");
        const resp = await loginUser(curEmail,password)
        const{firstName,lastName,status,dob,gender,city,state,email,mobNo,jwt,role} = resp;
        console.log("mohit : "+firstName);
        if(status === 'success'){
          dispatch(login());
          // dispatch(loginSuccess({firstName:firstName}));
          // dispatch({type:'USER',payload:true});
          sessionStorage["firstname"]=firstName;
          sessionStorage["lastname"]=lastName;
          sessionStorage["gender"]=gender;
          sessionStorage["city"]=city;
          sessionStorage["dob"]=dob;
          sessionStorage["state"]=state;
          sessionStorage["mobNo"]=mobNo;
          sessionStorage["email"]=email;
          sessionStorage["role"]=role;
          sessionStorage["token"]=jwt;
          navigate('/home');

          console.log("mohit");
        }
        console.log(resp['status'])
        console.log(resp.status)
        // console.log("mohit");
        // sessionStorage.setItem("user",resp);  
        console.log(resp.payload)

      }

      const logoutUser=()=>{
        // dispatch({type:"USER",payload:false})
        navigate("/")
      }
//     const handleSubmit=async()=>{

//         if (Cred.email() === "") {
//             toast.error("Email Field Cannot Be Empty !!!", { theme: "colored" });
//           } else if (
//             !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(Cred.email)
//           ) {
//             toast.error("Email Address is Not Valid !!!", { theme: "colored" });
//           } else if (Cred.password.trim() === "") {
//             toast.error("Paasword Field Cannot Be Empty !!!", { theme: "colored" });
//           }
//           else {
//             dispatch(loginStart());
//             console.log("kuch")
//             try {
//             //   const resp = await axios.post("/auth/signIn", {Cred});
//             const resp = await loginUser(curEmail,password)
//               console.log(resp)
//               if(resp.data?.status==false){
//                 toast.error(resp.data?.message, {
//                   theme: "colored",
//                 });
//                 dispatch(loginFailure());
//               }else{
//                 // sessionStorage.setItem("token", resp.data.id);
//                 console.log(resp)
                
//                 dispatch(loginSuccess(resp));
//                 const{firstName,lastName,status,dob,gender,city,state,email,mobNo} = resp;
//                 sessionStorage["firstname"]=firstName;
//           sessionStorage["lastname"]=lastName;
//           sessionStorage["gender"]=gender;
//           sessionStorage["city"]=city;
//           sessionStorage["dob"]=dob;
//           sessionStorage["state"]=state;
//           sessionStorage["mobNo"]=mobNo;
//           sessionStorage["email"]=email;
//                 navigate('/home')    ;
//               }
//             } catch (err) {
//               dispatch(loginFailure());
//             }
//     }
// }


return (
    <>
    <div className="container-fluid">
    <div className="maincontainer">
        <div className="container-fluid">
            <div className="row no-gutter" style={{marginTop:20}}>
               
                <div className="col-md-6 d-none d-md-flex bg-image" ><img src='http://localhost:3000/Images/loginImg.jpg' alt='error loading'/></div>
                
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                       
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4">User Login</h3>
                                    <p className="text-muted mb-4"></p>
                                    {/* <form> */}
                                        <div className="form-group mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required autoFocus="" onChange={(e)=>{setEmail(e.target.value)}
                } className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}
                  } required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <button className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={loginfun}>Sign in</button>
                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <hr/> */}
      </div>
      </div>
    </>
);
}