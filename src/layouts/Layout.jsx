import React from 'react'
import { Outlet } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Layout = () => {
  return (
    <div>
      <h1>Main Nav</h1>
      <hr />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <a href='../Home'>Home</a>
          <a href='../About'>About</a>
          <a href='../Contact'>Contact</a>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default Layout
