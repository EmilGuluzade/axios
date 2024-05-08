import React from 'react'
import {Helmet} from "react-helmet";
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const {id}=useParams()
    
  return (
    <div>
     <Helmet>
        <meta charSet="utf-8" />
        <title> ProductDetail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      ProductDetail
    </div>
  )
}

export default ProductDetail
