import React from 'react'
import { Outlet } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Layout = () => {
  return (
    <div>
      <br></br>
      <Navbar>
      <Container>
      <Link to={"/"} className="">
      React & Larevel CRUD APP
      </Link>
      </Container>
      </Navbar>
      <div class="header1">
      <h1>Main Nav</h1>
      </div>
      <hr />
      <Navbar >
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
