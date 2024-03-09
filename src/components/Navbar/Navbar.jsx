import Logo from '../Icons/Logo'
import EmailIcon from '../Icons/EmailIcon'
import PhoneIcon from '../Icons/PhoneIcon'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar({isMenuClicked, toggleMenu}) {

    return (
        <div className='navbar'>
            {/* Top navbar */}
            <div className={isMenuClicked ? 'navbar__logo-container blur' : 'navbar__logo-container'}>
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className='navbar__spacer'></div>
            <div className='navbar__contact-icons-container'>
                <EmailIcon />
                <PhoneIcon />
            </div>
            <div className='navbar__hamburger-container'>
                <GiHamburgerMenu className='navbar__hamburger' onClick={toggleMenu} />
            </div>

            {/*Hamburger menu sidebar*/} 
            <div className={isMenuClicked ? 'menu visible' : 'menu hidden'}>
                <AiOutlineClose className='menu__close' onClick={toggleMenu} />
                <ul className='menu__list'>
                    <Link to="/">
                        <li>Homepage</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/sellyourhome">
                        <li>Sell Your Home</li>
                    </Link>
                    <Link to="/forsale">
                        <li>Homes for Sale</li>
                    </Link>
                    <Link to="/workwithus">
                        <li>Work With Us</li>
                    </Link>
                    <Link to="/faqs">
                        <li>FAQs</li>
                    </Link>
                </ul>
            </div>
        </div>        
    )
}