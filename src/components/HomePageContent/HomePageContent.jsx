import './HomePageContent.scss'
import PropertyShowcaseCard from '../PropertyShowcaseCard/PropertyShowcaseCard'
import BuyAHomeCard from '../BuyAHomeCard/BuyAHomeCard'
import SellYourHomeCard from '../SellYourHomeCard/SellYourHomeCard'
import MeetOurTeamCard from '../MeetOurTeamCard/MeetOurTeamCard'
import WorkWithUsCard from '../WorkWithUsCard/WorkWithUsCard'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'

export default function HomePageContent() {
    
    return (
        <div className="home-page-content">
            <PropertyShowcaseCard />
            <BuyAHomeCard />
            <SellYourHomeCard />
            <MeetOurTeamCard />
            <WorkWithUsCard />
            <TestimonialsCard />
        </div>
    )
}