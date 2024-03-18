import FacebookIcon from '../../Icons/FacebookIcon'
import InstagramIcon from '../../Icons/InstagramIcon'
import LinkedInIcon from '../../Icons/LinkedInIcon'
import TikTokIcon from '../../Icons/TikTokIcon'
import './Hero.scss'

export default function Hero() {
    
    return (
        <div className='hero'>
            <div className='hero__socials-icons-container'>
                <a href='https://www.facebook.com/jadahomesolutions/'><FacebookIcon /></a>
                <a href='https://www.instagram.com/jadahomesolutions?igsh=MWRkamdwODNkejhtcw=='><InstagramIcon /></a>
                <a href='https://www.linkedin.com/company/jada-home-solutions'><LinkedInIcon /></a>
                <a href='https://www.tiktok.com/@jadahomesolutions'><TikTokIcon /></a>
            </div>
            <h1 className='hero__message'>
                We <span className='hero__message-highlight'>SERVE</span> Chicagoland homeowners in need of solutions, <span className='hero__message-highlight'>REBUILD</span> neighborhood homes, and <span className='hero__message-highlight'>FULFILL</span> family dreams
            </h1>
        </div>
    )
}