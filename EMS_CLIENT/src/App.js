import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Component/NavBar';
import Login from './Component/Login';
import Footer from './Component/Footer';
import Booking from './Component/Booking';
// import Gallery from './Component/Gallery';
import Profile from './Component/Profile';
// import adminUsers from './Component/adminUsers';
import AdminUsers from './Component/AdminUsers';
import RegisterUser from './Component/registerUser';
import Gallery from './Component/Gallary';
import ContactUs from './Component/contactUs';
import AboutUs from './Component/AboutUs';
import BookingService from './Component/BookingService';
import CustomerProfile from './Component/CustomerProfile';
import AdminNavBar from './Component/AdminNavbar';
import ProtectedRoutes from './ProtectedRoutes';
import AdminVenue from './Component/AdminVenue';
import AdminFeedbacks from './Component/AdminFeedbacks';
import OrderDetails from './Component/OrderDetails';
import { createContext, useReducer } from 'react';
import { useSelector } from 'react-redux';

export const UserContext  =createContext();

function App() {
  const loginst = useSelector((state) => state.auth.status);
  
  return (
    <div className="App">
      <UserContext.Provider>
      {sessionStorage.getItem('role')=="CUSTOMER" ? <NavBar/>:''}
      {sessionStorage.getItem('role')=="ADMIN" ? <AdminNavBar/>:''}  
      <Routes>
        
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/'     element={<Login/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/orderDetails' element={<OrderDetails/>}></Route>

        {/* <Route path=''></Route> */}
        <Route path='/profile' element={<Profile/>}>
          {/* <Route path='' element={<Profile/>}></Route> */}
        </Route>
        <Route path='/bookingService' element={<BookingService/>}>
          {/* <Route path='' element={<BookingService/>}></Route> */}
        </Route>
        {/* <Route path='/profile' element={<ProtectedRoutes/>}>
          <Route path='' element={<Profile/>}></Route>
          </Route>
          <Route path='/profile' element={<ProtectedRoutes/>}>
          <Route path='' element={<Profile/>}></Route>
        </Route> */}
        <Route path='/bookingService' element={<BookingService/>}></Route>
        <Route path='/admin/getVenues' element={<AdminVenue/>}></Route>
        <Route path='/admin/getUsers' element={<AdminUsers/>}></Route>
        <Route path='/admin/getFeedbacks' element={<AdminFeedbacks/>}></Route>
        <Route path='/register' element={<RegisterUser/>}></Route>
        <Route path='/profile' element={<CustomerProfile/>}></Route>
        <Route path='*' element={<div><h2>
           Page Not Found
           </h2>
           </div>}></Route>
      </Routes>
      {loginst &&  <Footer/>}
      <ToastContainer/>
        </UserContext.Provider>
    </div>
  );
}

export default App;
