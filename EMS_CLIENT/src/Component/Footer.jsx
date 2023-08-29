import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <>
		<div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to={"/home"} className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link to={"/booking"} className="nav-link px-2 text-muted">Features</Link></li>
      <li className="nav-item"><Link to={"/gallery"} className="nav-link px-2 text-muted">Gallery</Link></li>
      <li className="nav-item"><Link to={"/faqs"} className="nav-link px-2 text-muted">FAQs</Link></li>
      <li className="nav-item"><Link to={"/about"} className="nav-link px-2 text-muted">About</Link></li>
    </ul>
    <p className="text-center text-muted">&copy; 2023 EventGuru, Inc</p>
  </footer>
</div>
    </>
    );
}