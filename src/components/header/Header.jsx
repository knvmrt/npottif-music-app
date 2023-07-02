import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./header.scss"
import Logo from "../../img/logo.svg"

const Header = () => {
    return (
        <header className='header'>

            <div className='logo'>
                <Link to={"/home"}><img src={Logo} /></Link>
            </div>

            <ul className='nav'>
                <li><NavLink to={"/home"}> <i className="fa-solid fa-house"></i> Home </NavLink ></li>
                <li><NavLink to={"/playlist"}> <i className="fa-solid fa-layer-group"></i> PlayList </NavLink ></li>
                <li><NavLink to={"/about"}> <i className="fa-solid fa-circle-info"></i> About </NavLink ></li>
            </ul>

            <div className='right-bar'>

                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>

            </div>


        </header>
    )
}

export default Header
