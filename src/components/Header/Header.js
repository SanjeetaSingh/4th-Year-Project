import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">

            <div className="header_links">
                <p><Link to='/' style={{ color: "black", fontSize: "15px", fontWeight: 'bold', textDecoration: 'none' }}>Play</Link></p>
                <p><Link to='/about' style={{ color: "black", fontSize: "15px", fontWeight: 'bold', textDecoration: 'none' }}>About</Link></p>
                <p><Link to='/help' style={{ color: "black", fontSize: "15px", fontWeight: 'bold', textDecoration: 'none' }}>Help</Link></p>
            </div>
        </div>
    )
}

export default Header
