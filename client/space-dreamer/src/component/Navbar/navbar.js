import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css'

const MyNavbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className='mx-5' style={{ fontWeight: 'bold', fontSize:'1.5rem' }}> Space<span className='text-danger text-bold' >Dreamer</span></Navbar.Brand>
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
            <Nav.Link href="#home" className='text-white' style={{fontSize: '1rem'}}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about" className='text-white' style={{fontSize: '1rem'}}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item><Nav.Link href="#services" className='text-white' style={{fontSize: '1rem'}}>Services</Nav.Link></Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" className='text-white' style={{fontSize: '1rem'}}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          {/* {isLoggedIn ? (
            <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
          ) : (
            <Button variant="outline-light" onClick={handleLogin}>Login</Button>
          )} */}
          <Button variant='outline-light' className='mx-1 my-1'>Log In</Button>
          <Button variant='outline-light' className='mx-1 my-1'>Log Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
