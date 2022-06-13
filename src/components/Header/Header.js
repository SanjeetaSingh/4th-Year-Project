import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">

            <div className="header_links">
                <p><Link to='/' style={{ color: "black", fontSize: "15px", fontWeight: 'bold', textDecoration: 'none' }}>Home</Link></p>
                <p><Link to='/about' style={{ color: "black", fontSize: "15px", fontWeight: 'bold', textDecoration: 'none' }}>About</Link></p>
            </div>
        </div>
    )
}

export default Header
