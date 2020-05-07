import React from 'react'
import './header.css';
import logo from '../../assets/logo-colored-01.png';
import profile from '../../assets/profile-icon-01.png'
import {Navbar} from 'react-bootstrap'
function header() {
  return (
    <Navbar>
    <Navbar.Brand href="#home"><img src={logo} alt="Logo" className='logo' /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text >
      <a href="#profile" className='profile'>PROFILE</a> <a href="#profile" ><img src={profile} alt="Logo" className='profileImg' /></a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
    // <div className="header">
    //   <Navbar fixed="top" />
    //   <img src={logo} alt="Logo" className='logo' />
    //    <p>PROFILE</p>
    
    // </div>
  )
}

export default header

