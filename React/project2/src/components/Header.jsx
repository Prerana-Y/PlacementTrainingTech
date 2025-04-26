import React from 'react'
import "./Header.css";


import { Link } from 'react-router-dom';

function Header() {
  //get token from the browser local storage
  const token=localStorage.getItem("token");
  console.log(token);

  function handleLogout(){
    localStorage.clear();
    alert("Logged out Successfully!")
    window.location.reload();
  }
  return (
    <div>
        <nav className='navbar'>
            <div className='nav-brand'>My Ecommerce</div>
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                {token ? (
                  <button onClick={handleLogout}>Logout</button>
                ):(
                   <Link to="/login">Login</Link>
                   )}
            </div>
        </nav>
    </div>
  )
}

export default Header;
