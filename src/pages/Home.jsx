import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import CreateProduct from '../components/CreateProduct';
import EditProduct from '../components/EditProduct';
import Tabletab1 from '../components/Tabletab1';

function Home() {
  const [count, setCount] = useState(0)

  return (
  <div>
      
      <div class="body1">
      Home Page
     <Container className='mt-5'>
      <Row>
        <Col md={13}>
          <Routes>
            <Route exact path="/" element={<ProductList />}/>
            <Route path="/product/create" element={<CreateProduct />}/>
            <Route path="/product/edit/:id" element={<EditProduct />}/>
          </Routes>
        </Col>
      </Row>
     </Container>
     </div>


  </div>
  )
}

export default Home
