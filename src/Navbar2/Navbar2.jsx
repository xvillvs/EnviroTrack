import React from 'react'
import './Navbar2.css'


const Navbar2 = () => {
    return (
        <header className='header'>
            <div className="logo-container">
            <img src="./public/logo.png" alt="Logo" className="logo-img" />
            <a href='/' className='logo'>EnviroTrack</a>
            </div>
            <nav className="navbar">
                <a href='/profile'>Profile</a>
                <a href='/eco'>Ecofee</a>
                <a href='/visit'>Visit</a>
                <a href='/'>Logout</a>
            </nav>
        </header>
    )
}

export default Navbar2