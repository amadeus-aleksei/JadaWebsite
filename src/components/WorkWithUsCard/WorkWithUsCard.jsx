import './WorkWithUsCard.scss'
import { Link } from 'react-router-dom'

export default function WorkWithUsCard() {
    return (
        <div className='work-with-us-card'>
            <h1 className='work-with-us-card__header'>Work With Us!</h1>
            <p className='work-with-us-card__text'>We recognize that much of our success is based on the strong partnerships and relationships we have cultivated over the years.  We are always seeking to work with like-minded, honest, and highly ethical teammates with a sincere interest in helping people get out of difficult situations.  Whether you are looking to invest in real estate, or you are a contractor who loves to build homes for people, or you enjoy being an agent for clients, we would love to work with you!</p>
            <Link to="/workwithus">
                <button className='work-with-us-card__button'>Find Out More</button>
            </Link>
        </div>
    )
}