import React from 'react'
import './Navbar.css'


const Navbar = () => {
    return (
        <header className='header'>
            <a href='/' className='logo'>EnviroTrack</a>

            <nav className="navbar">
            
            <a href='/'>Home</a>
            <a href='/'>Ecofee</a>
            <a href='/'>Visit</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
            <a href='/'>Logout</a>

            </nav>
        </header>
    )
}

export default Navbar