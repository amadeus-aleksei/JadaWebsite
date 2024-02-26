import Logo from '../Icons/Logo'
import EmailIcon from '../Icons/EmailIcon'
import PhoneIcon from '../Icons/PhoneIcon'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import "./Navbar.scss"
import { Link } from 'react-router-dom'

export default function Navbar() {
    
    return (
        <div className='navbar'>
            <div className='navbar__logo-container'>
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
                {/* <AiOutlineClose /> */}
                <GiHamburgerMenu />
            </div> 
        </div>
    )
}