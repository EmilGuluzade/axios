import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Product = () => {
  const [data,setdata]=useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((list) => {
        setdata(list.data)
        console.log(list.data)
      })
  }, []);


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
   <div className="cards">
   {
        data.map((item,index)=>(
          
    <div key={index} className="card">
        <div className="header-card">
            <img src={item.image} alt="" />
        </div>
        <div className="body-card">
            <p>{item.price}$</p>
            <p>{item.title}</p>
    <Link to={`/product/${item.id}`}>detail</Link>
    </div>
    
 </div>
        ))
      }
      
      </div>
      </div>
  )
}; 

export default Product;
