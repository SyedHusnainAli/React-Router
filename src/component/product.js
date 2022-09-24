
import React from 'react'
import Shoes from './../codes.json'
import { Link } from 'react-router-dom';


function product() {


  return (
    <div className='productcontainer'>
     {Object.keys(Shoes).map((keyName) =>{
       const shoe = Shoes[keyName]
       console.log(shoe)
     return(
       <Link key={keyName} className="link" to={`/home/${keyName}`}>
       <h4>{shoe.name}</h4>
       <img src={shoe.img} alt="imges" height={150} />
       </Link>
     )
     })}
    </div>
  )
 
}
export default product;
