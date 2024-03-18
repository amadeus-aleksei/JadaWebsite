import FacebookIcon from "../Icons/FacebookIcon"
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TikTokIcon from "../Icons/TikTokIcon";
import './Footer.scss'
import { Link } from "react-router-dom";

export default function Footer() {
    
    return (
        <div className="footer">
            <h2 className="footer__explore">Explore</h2>
            <div className="footer__explore-container">
                <ul className="footer__explore-items">
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
                        <li>Homes For Sale</li>
                    </Link>
                    <Link to="/workwithus">
                        <li>Work With Us</li>
                    </Link>
                    <Link to="/faqs">
                        <li>FAQs</li>
                    </Link>
                    <Link to="/privacypolicy">
                        <li>Privacy Policy</li>
                    </Link>
                </ul>
            </div>
            <h2 className="footer__contact-us">Contact Us</h2>
            <div className="footer__contact-us-container">
                <button className="footer__button">info@jadahomesolutions.com</button>
                <button className="footer__button">312.883.JADA</button>
            </div>
            <h2 className="footer__follow-us">Follow Us</h2>
            <div className="footer__follow-us-container">
                <a href="https://www.facebook.com/jadahomesolutions/"><FacebookIcon /></a>
                <a href="https://www.instagram.com/jadahomesolutions?igsh=MWRkamdwODNkejhtcw=="><InstagramIcon /></a>
                <a href="https://www.linkedin.com/company/jada-home-solutions"><LinkedInIcon /></a>
                <a href="https://www.tiktok.com/@jadahomesolutions"><TikTokIcon /></a>
            </div>
            <p className="footer__text">JADA Home Solutions is a Private Real Estate Development and Investment Company. We are not a Real Estate Broker.</p>
        </div>
    )
}