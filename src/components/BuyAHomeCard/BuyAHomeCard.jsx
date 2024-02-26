import buyAHome from '../../assets/buy-a-home.png'
import './BuyAHomeCard.scss'
import { Link } from 'react-router-dom'

export default function BuyAHomeCard() {
    return (
        <div className="buy-a-home-card">
            <h1 className='buy-a-home-card__header'>Buy A Home</h1>
            <img className='buy-a-home-card__image' src={buyAHome} alt='Home for sale' />
            <Link to="/homesforsale" className="buy-a-home-card__button-link">
                <button className='buy-a-home-card__button' type='button'>View All Properties</button>
            </Link> 
        </div>
    )
}