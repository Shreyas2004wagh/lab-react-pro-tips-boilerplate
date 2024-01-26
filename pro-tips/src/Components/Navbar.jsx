
import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){
  return (
    <div>
      <nav>
        <Link to={"/"}>
            <h1 style={{color:"white", margin:"0 15px"}}>Kalvium</h1>
        </Link>
        <div className='flex'>
            <Link to={"/Form"}> 
                <h3>Form</h3>
            </Link>
            <Link to={"/About"}>
                <h3>About</h3>
            </Link>
        </div>
      </nav>
    </div>
  )
}
