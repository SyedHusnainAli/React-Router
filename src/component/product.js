import React from "react";
import Shoes from './../codes.json'
import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Product() {
  <h1>hye</h1>
  //console.log(Object.entries(Shoes))
  return (
    <div>
 <Outlet />
 <ul>
  {Object.entries(Shoes).map(([slug, {name, img} ]) =>
    <li key={slug}>
       <Link to={`/about/${slug}`}>
<h2>{name}</h2>
<img src={img} alt={name} />
</Link> 
    </li>
  )}
 </ul>

</div>
  );
}

export default Product;
