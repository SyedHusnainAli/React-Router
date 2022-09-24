
import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './../codes.json'


function home() {

const { id } = useParams();
const shoe = Shoes[id]
console.log(shoe)
  return (
    <div>
     
     <h2>home pages</h2>
    </div>
  )
 
}
export default home;
