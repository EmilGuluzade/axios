import React from 'react'

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
        <Link to="/about">about</Link>
          
        </li>
        <li>
          <Link to="/contact">contact</Link>
            
        </li>
        <li>
        <Link to="/product">product</Link>
          
        </li>
        <li>
          <Link to="/product/:id">productdetail</Link>
            
        </li>
      </ul>
    </div>
  )
}

export default Navbar
