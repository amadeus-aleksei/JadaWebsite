import InfoCard from "../InfoCard/InfoCard";
import "./WorkWithUsPageContent.scss"
import PhoneIcon from "../Icons/PhoneIcon"
import EmailIcon from "../Icons/EmailIcon"
import HowItWorks from "../Icons/HowItWorks";

export default function WorkWithUsPageContent() {

    return (
        <div className="work-with-us-page-content">
            <InfoCard 
                header={<h1 className="info-card__header">Realtors</h1>}
                content={
                    <div className="realtors-card-content">
                        <p>
                            We place a high value on the knowledge and expertise of good real estate agents and brokers. We continually strive to build relationships with qualified, experienced agents who have both a passion for real estate and an uncompromising drive to succeed. We believe that by working together, we will not only develop a catalog of successful win-win transactions, but also create a powerful and lucrative collaboration that adds value and serves our community.<br></br><br></br> We pride ourselves on having a systematized buying process. As an agent you can take advantage of the many opportunities we can provide as experienced real estate investors.
                            <h2>What's In It For You?</h2>
                            <ul>
                                <li>Opportunity to make double commission</li>
                                <li>Consistent business</li>
                                <li>Obtain referral leads</li>
                                <li>Access to property specialist in your area</li>
                                <li>Opportunity to host open houses</li>
                                <li>Become a distressed property specialist in your area</li>
                                <li>Enhanced profile as an agent in your community</li>
                            </ul>
                            We believe that good investors are those who place high value on the knowledge and expertise of good agents. In turn, we hope to share our knowledge with you and help to provide you with a consistent stream of income.
                        </p>
                        <div className="realtors-card-content__btn-container">
                            <p>Contact Us</p>
                            <div className="realtors-card-content__btn-container__btns">
                                <PhoneIcon />
                                <EmailIcon />
                            </div>
                        </div>
                    </div>
                }
            />

            <InfoCard 
                header={<h1 className="info-card__header">Contractors</h1>}
                content={
                    <div className="contractors-card-content">
                        <p>
                            Much of our success comes from the relationships we’ve built with our general contractors who embody high ethical and work standards. We have a detailed system for each project and love to pay contractors when work is complete – not weeks or months later!
                            <h2>How We Can Help You</h2>
                            <ul>
                                <li>We provide a detailed scope of work on each job to make bidding fast and easy</li>
                                <li>We can help you create new business</li>
                                <li>We are part of a national network of investors</li>
                                <li>We love to pay our contractors</li>
                            </ul>
                            <h2>How To Apply</h2>
                            Submit your information online by filling out our Contractor Application below and we will follow up with you shortly!
                        </p>
                    </div>
                }
                hasButton={true}
                buttonText="Apply Here"
                linkTo="/contractors"
            />
            <InfoCard
                header={<h1 className="info-card__header">Private Investors</h1>}
                content={
                    <div className="private-investors-card-content">
                        <p>
                            A private money loan is a loan that is given to a real estate investor, secured by real estate. When we have isolated a home that is well under market value, we give our private lenders an opportunity to fund the purchase and rehab of the home. Through that process, the lender can yield 12% annual interest on their investment – 5 or 6 times the rates you can get on bank CDs and other traditional investment plans.
                            <h2>How It Works</h2>
                            <HowItWorks />
                            <h2>What's In It For You?</h2>
                            <ul>
                                <li>Safe investment secured by real estate</li>
                                <li>High returns on your money</li>
                                <li>A predictable income stream because rates do not fluctuate</li>
                                <li>No management costs</li>
                                <li>No daily headaches with managing contractors</li>
                            </ul>
                            If we haven’t already, it’s important to sit down and discuss all these details in person. We will need a clear definition of what your goals are and the amount you are comfortable initially investing. At that point, we will present you with any current opportunities that fit that criteria or contact you as soon as we have one that fits.
                        </p>
                        <div className="realtors-card-content__btn-container">
                            <p>Contact Us</p>
                            <div className="realtors-card-content__btn-container__btns">
                                <PhoneIcon />
                                <EmailIcon />
                            </div>
                        </div>
                    </div>
                }   
            />
        </div>
    )
}