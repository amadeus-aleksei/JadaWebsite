import InfoCard from "../InfoCard/InfoCard";
import "./AboutPageContent.scss"

// Assets
import nellyImage from '../../assets/nelly-taromina.png'
import steveImage from '../../assets/steve-taromina.png'

export default function AboutPageContent() {
    return(
        <div className="about-page-content">
            <InfoCard
                header={<h1 className="info-card__header">About Us</h1>}
                content={<p className="info-card__text">JADA Home Solutions is the areas’ premier real estate solutions company, and since our inception we have been helping homeowners and improving communities in each and every city we work in. Through our extensive knowledge of the business, network of resources, and years of expertise, we are able to assist homeowners with a wide variety of real estate problems. We pride ourselves on our reputation for working one-on-one with each customer to handle their individual situations. With the ability to directly purchase homes and make cash offers, we can create an extremely fast, and hassle-free transaction.</p>}
            />
            <InfoCard
                header={<h1 className="info-card__header">Our Mission</h1>}
                content={<p className="info-card__text">Our mission is to rejuvenate neighborhoods and increase the standard of living by improving the overall quality of housing for residents in the Chicagoland area.</p>}
            />
            <InfoCard
                header={<h1 className="info-card__header">Our Story</h1>}
                content={
                    <div>
                        <div className="info-card__founders-titles">
                            <div>
                                <img className='info-card__image-founders' src={nellyImage} alt='Nelly Taromina'/>
                                <h4 className='info-card__founder-name'>Nelly Taromina</h4>
                                <p className='info-card__founder-info'>Co-founder & CEO</p>
                            </div>
                            <div>
                                <img className='info-card__image-founders' src={steveImage} alt='Steve Taromina'/>
                                <h4 className='info-card__founder-name'>Steve Taromina</h4>
                                <p className='info-card__founder-info'>Co-founder & CFO</p>
                            </div>
                        </div>
                        <p className="info-card__text">Steve and Nelly are life-long residents of the Chicagoland area and have dedicated over 60 combined years at a large military defense company where they worked on complex and sophisticated systems. Helping our men and women in uniform get home safely to their families was their biggest passion. <br></br><br></br>
                            They also have a passion for helping people find answers to real estate challenges and giving back to our Chicagoland neighborhoods by making them beautiful places families can call home. They are highly motivated, knowledgeable, compassionate, and qualified to handle any real estate transaction. <br></br><br></br>
                            <span className="bold">What does JADA stand for?</span><br></br><br></br> It’s an acronym made up of the first names of their four children: Jonathan, Amadeus, Daniel and Ashley. They understand the importance of family in people’s lives and are committed to providing them with quality homes to create treasured lifetime memories.</p>
                    </div>
                }
            />
        </div>
    )
}