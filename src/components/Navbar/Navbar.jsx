import Logo from '../Icons/Logo'
import EmailIcon from '../Icons/EmailIcon'
import PhoneIcon from '../Icons/PhoneIcon'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar({isMenuClicked, toggleMenu}) {

    // Locks scrolling when isMenuClicked
    useEffect(() => {
        if (isMenuClicked) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = ''
        }

    }, [isMenuClicked])

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
                    <li onClick={toggleMenu}>
                        <Link to='/' className='menu__link'>Homepage</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/about' className='menu__link'>About</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/sellyourhome' className='menu__link'>Sell Your Home</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/forsale' className='menu__link'>Homes for Sale</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/workwithus' className='menu__link'>Work With Us</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/contractors' className='menu__link'>Contractors</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to='/faqs' className='menu__link'>FAQs</Link>
                    </li>
                </ul>
            </div>
        </div>        
    )
}