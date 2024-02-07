import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Navbar.css'

import { useAuth } from '../auth/AuthContext';
import axios from 'axios';

const MyNavbar = () => {
  // const [isLoggedIn, setLoggedIn] = useState(false);



  const { username } = useAuth();

  // useEffect(() => {
  //   const uidCookieValue = getCookie("uid");
  //   console.log(uidCookieValue)
  //   if (uidCookieValue) {
  //     setLoggedIn(true)
  //   }
  // }, [])

  const handleLogout = async (username) => {
    try {
     const response =  await axios.get('http://localhost:8080/api/user/logout')
    }
    catch (error) {
      console.log(error)
    }

  }

  // function getCookie(name) {
  //   const cookies = document.cookie.split('; ');
  //   for (let i = 0; i < cookies.length; i++) {
  //     const [cookieName, cookieValue] = cookies[i].split('=');
  //     if (cookieName === name) {
  //       return cookieValue;
  //     }
  //   }
  //   return null; // Return null if cookie with specified name is not found
  // }
  console.log(username)

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className='mx-5' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}> Space<span className='text-danger text-bold' >Dreamer</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <img
          src={process.env.PUBLIC_URL + './menu-icon.png'}
          alt="Menu"
          style={{ width: '30px', height: '30px' }}
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between mx-5'>
        <Nav className="mx-auto" >
          <Nav.Item>
            <Nav.Link className='text-white' style={{ fontSize: '1rem' }} as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-white' style={{ fontSize: '1rem' }} as={Link} to="/news">News</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='text-white' style={{ fontSize: '1rem' }} as={Link} to="/contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            {username ? (
              <div>
                <NavDropdown title={username} className="text-white nav-dropdown-hover " style={{ fontSize: '1rem' }} id="nav-dropdown">
                  <NavDropdown.Item eventKey="option-1" className='bg-dark'>
                    <Nav.Link className='text-white' style={{ fontSize: '1rem' }} as={Link} to="/addnews">Add news</Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="option-2" className='bg-dark'>
                    <Nav.Link className='text-white' style={{ fontSize: '1rem' }} as={Link} to="/">Edit news</Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>)
              : (
                null
              )}

          </Nav.Item>
        </Nav>
        <Nav>
          {username ? (
            <Button variant="outline-light" className='mx-1 my-1' onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button variant='outline-light' className='mx-1 my-1' as={Link} to="/Signin">Log In</Button>
              <Button variant='outline-light' className='mx-1 my-1' as={Link} to="/Signup">Sign Up</Button>
            </>
          )}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
