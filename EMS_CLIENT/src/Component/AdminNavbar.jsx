import React from 'react';
// import { Link} from 'react-router-dom';

//  function AdminNavBar(){
//   // const Navigator = useNavigate();
//  return (
//   <>
//   <div class="container-fluid">
//     <div class="row flex-nowrap">
//         <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" style={{color:'white'}}>
//             <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//                 <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                     <span class="fs-5 d-none d-sm-inline">Menu</span>
//                 </a>
//                 <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
//                     <li class="nav-item">
//                         <a href="#" class="nav-link align-middle px-0">
//                             <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
//                         <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
//                             </li>
//                             <li>
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="#" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></a>
//                     </li>
//                     <li>
//                         <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
//                             <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
//                         <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
//                             <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
//                             <li class="w-100">
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="#" class="nav-link px-0 align-middle">
//                             <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
//                     </li>
//                 </ul>
//                 <hr/>
//                 <div class="dropdown pb-4">
//                     <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
//                         <span class="d-none d-sm-inline mx-1">loser</span>
//                     </a>
//                     <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
//                         <li><a class="dropdown-item" href="#">New project...</a></li>
//                         <li><a class="dropdown-item" href="#">Settings</a></li>
//                         <li><a class="dropdown-item" href="#">Profile</a></li>
//                         <li>
//                             <hr class="dropdown-divider"/>
//                         </li>
//                         <li><a class="dropdown-item" href="#">Sign out</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div class="col py-3">
//             Content area...
//         </div>
//     </div>
// </div>
//   <div className="container-fluid">
//   <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom:5}}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href="##">EventGuru</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" href="##" to={"/"}>Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to={"/users"}>Users</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to={"/venues"}>Venues</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to={"/bookings"}>Bookings</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to={"/feedbacks"}>Feedbacks</Link>
//         </li>
//       </ul>
//       </div>
//   </div>
// </nav>
// </div>
  
//   </>
//  );
// }
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Link,useNavigate } from 'react-router-dom';
import AdminUsers from './AdminUsers';
import { Dropdown } from 'react-bootstrap';
import { AccountCircleOutlined } from '@mui/icons-material';

function AdminNavBar(){
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [activeComponent, setActiveComponent] = useState(null);
  

    const handleProductsClick = () => {
        setActiveComponent('products');
      };
    
      const handleOrdersClick = () => {
        setActiveComponent('orders');
      };

      const handleUsersClick = () => {
        setActiveComponent('users');
      };
  
  
    const loadProducts = async () => {

    }
  
    return (
      <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ marginBottom: 5 }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="##">
            EventGuru
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="##"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/booking"}>
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/admin/getVenues"}>
                  Venue
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/admin/getFeedbacks"}>
                  Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/admin/getUsers"}>
                  Users
                </Link>
              </li>
            </ul>


  <Dropdown>
    <Dropdown.Toggle  variant='primary' id="dropdown-basic">
      Hello, Admin<AccountCircleOutlined/>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

          </div>
        </div>
      </nav>
      </div>
    );
}


// export default AdminDashboard

export default AdminNavBar;