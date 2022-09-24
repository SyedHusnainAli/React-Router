
import React from 'react'

import About from './component/about'
import Home from './component/home'
import Navbar from './component/navbar'
import Product from './component/product'
import {
    BrowserRouter as Router,
    
    Route,
    Routes,

  } from "react-router-dom";



function routerManger() {
  return (
    <div>
     
     <Router>
      <Navbar />
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/navbar/:id" element={< Navbar />} />
          
          </Routes>

        </Router>
       
    </div>
  )
 
}
export default  routerManger;
