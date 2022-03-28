import cl from './NavBar.module.scss'
import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = ()=>{
   
    const menu = (n)=>{
        document.getElementById("mySidenav").style.width = n+'px'
    }

    return(<div className={cl.container}>
        <Link className={cl.element} to="/">Home</Link>
        <Link className={cl.element} to="/about">About</Link>
    </div>)
}

export default NavBar