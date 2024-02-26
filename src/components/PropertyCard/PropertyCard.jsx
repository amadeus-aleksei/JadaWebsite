import propertyShowcase from '../../assets/property-showcase.png'
import './PropertyCard.scss'

export default function PropertyCard() {
    return (
        <div className='property-card'>

            <img className='property-card__image' src={propertyShowcase}/>
            <p className='property-card__address'>3335 Clinton Ave, Berwyn, IL 60402</p>
            <div className='property-card__property-info-container'>
                <div className='property-card__price-size-info-container'>
                    <h3 className='property-card__price'>$330,000</h3>
                    <p className='property-card__size-info'>4 Beds  3 Baths  1,800 Sq Ft</p>
                </div>
                <p className='property-card__isSold'>SOLD</p>
            </div>
        </div>
        
    )
}