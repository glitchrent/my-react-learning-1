import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import Notfound from "../pages/admin/Notfound";
import Layout from "../layouts/layout";
import LayoutAdmin from "../layouts/LayoutAdmin";


const AppRoutes = () => {
  return (
<div>


<BrowserRouter>
  <Routes>
    <Route>

    
      
      {/* Public */}
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      </Route>



      {/* Private */}
      <Route path="admin" element={<LayoutAdmin />}>
      <Route index element={<Dashboard />} />
      <Route path="manage" element={<Manage />} />
      </Route>


      <Route path="*" element={<Notfound />} />


    </Route>
  </Routes>
</BrowserRouter>
</div>
  )
}

export default AppRoutes;
