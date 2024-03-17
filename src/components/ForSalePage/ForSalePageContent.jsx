import PropertyCard from "../PropertyCard/PropertyCard"
import InfoCard from "../InfoCard/InfoCard"
import "./ForSalePageContent.scss"
import FormCard from "../FormCard/FormCard"

export default function ForSalePageContent() {
    return (
        <div className="for-sale-page-content">
            <InfoCard 
                header={<h1 className="info-card__header">Buy A Home</h1>}
                content={<p className="info-card__text">Check out our property listings below to see our current and future homes. Didn’t find your dream home? Fill out the form at the bottom so we can help you find it!</p>}
            />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <FormCard 
                title='FIND ME A HOME AND GET ME PRE-QUALIFIED!'
                buttonText='Contact Me'
            />
        </div>
    )
}