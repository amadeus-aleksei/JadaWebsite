import "./InfoCard.scss"
import { Link } from "react-router-dom"

export default function InfoCard({header, content, hasButton, buttonText, linkTo}) {

    return (
        <div className="info-card">
           <div>{header}</div>
           <div>{content}</div>
           {hasButton === true && (
                <Link to={linkTo}>
                    <button className="info-card__button">{buttonText}</button>
                </Link>
            )}
        </div>
    )
}