import { Delete } from '@mui/icons-material';
import { Button} from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function AdminUsers(){
    const [users,setUsers] = useState([])
    const [search,setSearch] = useState('')

    useEffect(()=>{
        loadAllData();
    },[])

    const deleteUser= async(userId)=>{
        try{
            const tokn = sessionStorage.getItem('token')
            const config = {
                headers:{Authorization:`Bearer ${tokn}`}
            }
        const response = await axios.delete(`http://localhost:6162/admin/deleteuser/${userId}`,config);
        console.log(response)
        // if (response.data==true){
            toast.success("User Deleted Sucessfully")    
        await loadAllData();
            
        // }else{
            // toast.error("Something Went Wrong")
        // }
            
        }catch(ex){
            console.log(ex)
                }
    }

    const loadAllData=async ()=>{
        try{
            const tokn = sessionStorage.getItem('token')
            const config = {
                headers:{Authorization:`Bearer ${tokn}`}
            }
            const response =await axios.get('http://localhost:6162/admin/getusers',config)
            setUsers(response.data)
            }catch(error){
                console.error('Error fetching data: ',error);
            }
    }

    return (
        <>
            <div><h2> User Details </h2></div>
            <div className="container">
                    <input type="text" name="search" onChange={(e)=>{setSearch(e.target.value)}} placeholder='search by name' />
            </div>
            <table className="table table-borderless">
            <thead>
                <tr>
                <th scope="col" key={''}>id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No</th>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>

                { 
                users.filter((user)=>{return search.toLowerCase() === '' ? user : user.firstName.toLowerCase().includes(search)}).map(user=>
                <tr  key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobNo}</td>
                <td>{user.state}</td>
                <td>{user.city}</td>
                <td><Button variant='contained' color='error' startIcon={<Delete/>} onClick={()=>{deleteUser(user.id)}}>Delete</Button></td>
                </tr>)
                }
            </tbody>
            </table>
        </>
    )
}