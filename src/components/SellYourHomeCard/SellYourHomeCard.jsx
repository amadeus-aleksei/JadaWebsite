import sellYourHome from '../../assets/sell-your-home.png'
import './SellYourHomeCard.scss'
import { Link } from 'react-router-dom'

export default function SellYourHomeCard() {
    return (
        <div className="sell-your-home-card">
            <h1 className='sell-your-home-card__text'>Sell Your Home</h1>
            <img className='sell-your-home-card__image' src={sellYourHome} alt='Profit'/>
            <Link to="/sellyourhome">
                <button className='sell-your-home-card__button' type='button'>See How It Works</button>
            </Link>
        </div>
    )
}