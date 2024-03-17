import LaptopIcon from "../Icons/LaptopIcon"
import Phone2Icon from "../Icons/Phone2Icon"
import InfoCard from "../InfoCard/InfoCard"
import ThumbsIcon from "../Icons/ThumbsIcon"
import "./SellYourHomeContent.scss"
import FormCard from "../FormCard/FormCard"

export default function SellYourHomeContent() {

    return(
        <div className="sell-your-home-content">
            <InfoCard
                header={<h1 className="info-card__header">Selling Your Home</h1>}
                content={<p className="info-card__text">It is no easy decision for a homeowner to choose to sell their home under difficult circumstances. We are compassionate when it comes to helping homeowners out of just about any distressed situation, no matter what your hardship may be. There are no fees, upfront costs, commissions, or anything else. Just the simple honest truth about your home and how we can help you sell it fast to resolve any situation.<br></br><br></br> You may hear from others, the news, or even real estate agents, that all investors take advantage of the homeowner, but this simply isn’t true. JADA Home Solutions is part of a nationwide group of thousands of investors who are helping tens of thousands of homeowners every year. We may not be the “traditional” route for selling your home, but we genuinely CARE, and we CAN help, and we can do it quickly!</p>}
            />
            <InfoCard
                header={<h1 className="info-card__header">How It Works</h1>}
                content={
                    <div>
                        <div style={{margin: '0 0 2rem 0'}}>
                            <h2 className="step-num">-Step 1-</h2>
                            <LaptopIcon />
                            <p className="info-card__text-centered">Enter your information in the web form below.</p>
                        </div>

                        <div style={{margin: '0 0 2rem 0'}}>
                            <h2 className="step-num">-Step 2-</h2>
                            <Phone2Icon />
                            <p className="info-card__text-centered">You will be contacted to discuss your property (usually within 24 hours).</p>
                        </div>

                        <div style={{margin: '0 0 2rem 0'}}>
                            <h2 className="step-num">-Step 3-</h2>
                            <ThumbsIcon />
                            <p className="info-card__text-centered">You may accept or reject the offer presented to you.</p>
                        </div>

                        <div>
                            <h2 className="step-num">-Step 4-</h2>
                            <LaptopIcon />
                            <p className="info-card__text-centered">If you accept the offer, you’ll have cash in hand and your home is sold.</p>
                        </div>
                    </div>
                }
            />

            <FormCard 
                title='GET AN OFFER FOR YOUR HOME!'
                buttonText='Request Offer'
            />
        </div>
    )
}