import React from 'react'
import "./footer.scss"

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className='footer w-full'>
            <p> Npottif {year} © </p>
        </footer>
    )
}

export default Footer
