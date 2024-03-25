import "./FormCard.scss"

export default function FormCard({title, buttonText}) {


    return (
            <form className="form-card">
                <h3 className="form-card__title">{title}</h3>
                <div className="input-group">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="tel" name="phone" placeholder="Phone" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <button className="submit-btn" type="submit">{buttonText}</button>
                </div>
                
            </form>
    )
}