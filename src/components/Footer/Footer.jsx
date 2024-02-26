import FacebookIcon from "../Icons/FacebookIcon"
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TikTokIcon from "../Icons/TikTokIcon";
import './Footer.scss'

export default function Footer() {
    
    return (
        <div className="footer">
            <h2 className="footer__explore">Explore</h2>
            <div className="footer__explore-container">
                <ul className="footer__explore-items">
                    <li>Homepage</li>
                    <li>About</li>
                    <li>Sell Your Home</li>
                    <li>Homes For Sale</li>
                    <li>Work With Us</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <h2 className="footer__contact-us">Contact Us</h2>
            <div className="footer__contact-us-container">
                <button className="footer__button">info@jadahomesolutions.com</button>
                <button className="footer__button">312.883.JADA</button>
            </div>
            <h2 className="footer__follow-us">Follow Us</h2>
            <div className="footer__follow-us-container">
                <a href="#"><FacebookIcon /></a>
                <a href="#"><InstagramIcon /></a>
                <a href="#"><LinkedInIcon /></a>
                <a href="#"><TikTokIcon /></a>
            </div>
            <p className="footer__text">JADA Home Solutions is a Private Real Estate Development and Investment Company. We are not a Real Estate Broker.</p>
        </div>
    )
}