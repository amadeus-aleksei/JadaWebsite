import './PropertyShowcaseCard.scss'
import PropertyCard from '../../../PropertyCard/PropertyCard'
import { Link } from 'react-router-dom'

export default function PropertyShowcaseCard() {
    return (
        <div className="property-showcase-card">
            <Link to="/forsale">
                <h1 className='property-showcase-card__text'>Property Showcase</h1>
            </Link>
            <div><PropertyCard /></div>
        </div>
    )
}