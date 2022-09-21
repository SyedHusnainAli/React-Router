

import { BrowserRouter as Router, Routes,} from "react-router-dom";
import {  Route } from "react-router-dom";
import Home from './component/home';
import About from './component/about';
import Product from './component/product';
import ProductItems from './component/productItems';
import Navbar from './component/navbar'

function RouteConfig() {
  return (
    <div>
 <Router>
 <Navbar />
    <Routes>
      
      <Route path='/' element={< Home />} />
      <Route path='/about' element={< About />} />
      <Route path='product' element={< Product />} />
      <Route path='productItems/:id' element={<ProductItems />} />
    </Routes>
 </Router>

</div>
  );
}

export default RouteConfig;
