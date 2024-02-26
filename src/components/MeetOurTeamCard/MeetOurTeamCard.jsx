import nellyImage from '../../assets/nelly-taromina.png'
import steveImage from '../../assets/steve-taromina.png'
import './MeetOurTeamCard.scss'
import { Link } from 'react-router-dom'

export default function MeetOurTeamCard() {
    return (
        <div className="meet-our-team-card">
            <h1 className='meet-our-team-card__header'>Meet Our Team</h1>
            <div className='meet-our-team-card__founders-titles'>
                <div className='meet-our-team-card__founder-nelly-taromina'>
                    <img className='meet-our-team-card__image' src={nellyImage} alt='Nelly Taromina'/>
                    <h4 className='meet-our-team-card__founder-name'>Nelly Taromina</h4>
                    <p className='meet-our-team-card__founder-info'>Co-founder & CEO</p>
                </div>
                <div className='meet-our-team-card__founder-steve-taromina'>
                    <img className='meet-our-team-card__image' src={steveImage} alt='Steve Taromina'/>
                    <h4 className='meet-our-team-card__founder-name'>Steve Taromina</h4>
                    <p className='meet-our-team-card__founder-info'>Co-founder & CFO</p>
                </div>
            </div>
            <Link to="/about">
                <button className='meet-our-team-card__button' type='button'>Get To Know Us</button> 
            </Link>
        </div>
    )
}