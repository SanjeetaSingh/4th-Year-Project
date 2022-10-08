import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

/**
 * Class creates the navigation bar at the top 
 * 
 * @returns a link to home and the about page
 */
function Header() {
    return (
        <div className="header">

            <div className="header_links">
                <p><Link to='/' class="home">Home</Link></p>
                <p><Link to='/about' class="about">About</Link></p>
            </div>
        </div>
    )
}

export default Header
