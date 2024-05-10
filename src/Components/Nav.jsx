import React from 'react'
import {Link} from "react-router-dom"
import "./Nav.css"


const Nav = () => {
  return (
    <div className='bar' >
        <Link to={"/"} className='K'>Kalvium❤️</Link>
        <div>
            <Link to={"/about"} className='Pg'>ABOUT</Link>
            <Link to={"/contact"} className='Pg'>CONTACT</Link>
        </div>
    </div>
  )
}

export default Nav