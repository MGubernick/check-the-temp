import React, { Fragment } from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// const authenticated = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )
//
const unauthenticated = (
  <Fragment>
    <Nav.Link href="#weather">Check The Weather</Nav.Link>
  </Fragment>
)

const alwaysShow = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = () => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      Check The Temp! 🌤
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav  className="ml-auto">
      {alwaysShow}
      {unauthenticated}
      </Nav>
      </Navbar.Collapse>
  </Navbar>
)

export default Header
