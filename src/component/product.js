import React from "react";
import Shoes from './../codes.json'
import {Outlet} from 'react-router-dom'

function Product() {
  console.log(Shoes)
  return (
    <div>
 <Outlet />
 <ul>
  {Object.entries(Shoes).map(([slug, {name, img} ]) =>
    <li key={slug}>
<h2>{name}</h2>
<img src={img} alt={name} />
    </li>
  )}
 </ul>

</div>
  );
}

export default Product;
