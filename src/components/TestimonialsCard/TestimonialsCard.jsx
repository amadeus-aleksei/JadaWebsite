import ArrowLeftIcon from '../Icons/ArrowLeftIcon'
import ArrowRightIcon from '../Icons/ArrowRightIcon'
import './TestimonialsCard.scss'

export default function TestimonialsCard() {
    return (
        <div className='testimonials-card'>
            <div className='testimonials-card__header-container'>
                <ArrowLeftIcon />
                <h1 className='testimonials-card__header'>Testimonials</h1>
                <ArrowRightIcon />
            </div>
            <p className='testimonials-card__text'>“There just aren't adequate words to describe the wonderful experience we had working with Steve and Nelly. They were so thorough, professional, efficient and caring throughout the whole process of selling our home. They treated us with warmth and genuineness from the very first meeting to the last and accomplished everything in our very short time frame. We highly recommend their services; they are an amazing team!”</p>
            <h3 className='testimonials-card__person-name'>RHIANNA MONTALVO - HOME SELLER</h3>
        </div>
    )
}