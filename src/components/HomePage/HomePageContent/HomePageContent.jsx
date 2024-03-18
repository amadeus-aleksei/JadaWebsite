import './HomePageContent.scss'

// Components
import InfoCard from '../../InfoCard/InfoCard'
import ArrowLeftIcon from '../../Icons/ArrowLeftIcon'
import ArrowRightIcon from '../../Icons/ArrowRightIcon'
import PropertyCard from '../../PropertyCard/PropertyCard'
import { Link } from 'react-router-dom'

// Assets
import nellyImage from '../../../assets/nelly-taromina.png'
import steveImage from '../../../assets/steve-taromina.png'
import sellYourHome from '../../../assets/sell-your-home.png'
import buyAHome from '../../../assets/buy-a-home.png'


export default function HomePageContent() {
    return (
        <div className="home-page-content">
            <Link to="/forsale">
                <InfoCard
                    header={
                        <Link to="/forsale">
                            <h1 className='info-card__header'>Property Showcase</h1>
                        </Link>
                    }
                    content={<PropertyCard />}
                />
            </Link>
            <Link to="/forsale">
                <InfoCard
                    header={<h1 className='info-card__header'>Buy A Home</h1>}
                    content={<img className='info-card__image' src={buyAHome} alt='Home for sale' />}
                    hasButton={true}
                    buttonText="View All Properties"
                    linkTo="/forsale"
                />
            </Link>
            <Link to="/sellyourhome">
                <InfoCard
                    header={<h1 className='info-card__header'>Sell Your Home</h1>}
                    content={<img className='info-card__image' src={sellYourHome} alt="Profits"/>}
                    hasButton={true}
                    buttonText="See How It Works"
                    linkTo="/sellyourhome"
                />
            </Link>
            <Link to="/about">
                <InfoCard
                    header={<h1 className='info-card__header'>Meet Our Team</h1>}
                    content={
                        <div className='info-card__founders-titles'>
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
                    }
                    hasButton={true}
                    buttonText="Get To Know Us"
                    linkTo="/about"
                />
            </Link>
            <Link to="/workwithus">
                <InfoCard
                    header={<h1 className='info-card__header'>Work With Us!</h1>}
                    content={<p className='info-card__text'>We recognize that much of our success is based on the strong partnerships and relationships we have cultivated over the years. We are always seeking to work with like-minded, honest, and highly ethical teammates with a sincere interest in helping people get out of difficult situations. Whether you are looking to invest in real estate, or you are a contractor who loves to build homes for people, or you enjoy being an agent for clients, we would love to work with you!</p>}
                    hasButton={true}
                    buttonText="Find Out More"
                    linkTo="/workwithus"
                />
            </Link>
            <InfoCard
                header={
                    <div className='info-card__header-container'>
                        <ArrowLeftIcon />
                        <h1 className='info-card__header testimonials'>Testimonials</h1>
                        <ArrowRightIcon />
                    </div>
                }
                content={
                    <div>
                        <p className='info-card__text'>"There just aren't adequate words to describe the wonderful experience we had working with Steve and Nelly. They were so thorough, professional, efficient and caring throughout the whole process of selling our home. They treated us with warmth and genuineness from the very first meeting to the last and accomplished everything in our very short time frame. We highly recommend their services; they are an amazing team!"</p>
                        <h3 className='info-card__person-name'>RHIANNA MONTALVO - HOME SELLER</h3>
                    </div>
                }
                hasButton={false}
            />
        </div>
    )
}