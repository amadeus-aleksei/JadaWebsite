import FacebookIcon from '../Icons/FacebookIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import LinkedInIcon from '../Icons/LinkedInIcon'
import TikTokIcon from '../Icons/TikTokIcon'
import './Hero.scss'

export default function Hero() {
    
    return (
        <div className='hero'>
            <div className='hero__socials-icons-container'>
                <a href='#'><FacebookIcon /></a>
                <a href='#'><InstagramIcon /></a>
                <a href='#'><LinkedInIcon /></a>
                <a href='#'><TikTokIcon /></a>
            </div>
            <h1 className='hero__message'>
                We <span className='hero__message-highlight'>SERVE</span> Chicagoland homeowners in need of solutions, <span className='hero__message-highlight'>REBUILD</span> neighborhood homes, and <span className='hero__message-highlight'>FULFILL</span> family dreams
            </h1>
        </div>
    )
}