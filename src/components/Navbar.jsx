import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Ana Sayfa</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink className="nav-link" to="/categories">Kategoriler</NavLink>
                            <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>

                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar