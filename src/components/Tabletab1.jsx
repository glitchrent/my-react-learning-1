import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    // ดึงข้อมูลจาก API
    useEffect(() => {
      axios
        .get('http://localhost:8000/api/products')
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data', error);
          setLoading(false);
        });
    }, []);
  
    // เช็คว่าข้อมูลยังโหลดไม่เสร็จ
    if (loading) {
      return <p>Loading...</p>;
    }
  
    // เช็คว่ามีข้อมูลใน products หรือไม่
    if (products.length === 0) {
      return <p>No products available</p>;
    }
  
    return (
      <ul>
        {products.map((product, id) => (
          <li key={id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.amount}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default App;
  
