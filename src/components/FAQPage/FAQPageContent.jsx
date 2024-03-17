import InfoCard from "../InfoCard/InfoCard";
import "./FAQPageContent.scss"

export default function FAQPageContent() {
    return (
        <div className="faq-page-content">
            <InfoCard
                header={<h1 className="info-card__header">FAQs</h1>}
                content={
                    <div className="faq-card-content">
                        <h2>How does the process work to sell my house?</h2>
                        <p>Once you have completed the “Get An Offer For Your Home” form, one of our real estate solutions specialists will contact you shortly (usually within 24 hours). In some situations, we will need to gather additional information. We will research your property and discuss all the details with you. We may be able to make you an offer for our company to buy your home directly from you right over the phone, or in most cases we will schedule a time with you to view the property and make you an offer!</p>
                        <br></br>

                        <h2>What sort of houses do you buy?</h2>
                        <p>We buy houses in any condition, in any area, in any price range, in any situation! We will buy your house as-is, you don’t need to do ANY repairs!</p>
                        <br></br>

                        <h2>What do you mean "any condition, area, price range, or situation"?</h2>
                        <p>Whether your house is in foreclosure, over-leveraged, condemned, has liens or health department violations, not maintained, fire-damaged, or about to fall down WE CAN BUY IT!</p>
                        <br></br>

                        <h2>Are you REALTORS tm?</h2>
                        <p>JADA Home Solutions is a real estate investment and solution company. We are property acquisition specialists that buy houses directly from sellers; we want to BUY your home. There is never a charge or a commission when we buy your property! However if listing your property is the best solution then we can and will connect you with a recommended licensed agent.</p>
                        <br></br>
                        
                        <h2>What will your service cost me?</h2>
                        <p>Nothing! We do not charge you any fees to discuss your situation, make you an offer or to buy your home.</p>
                        <br></br>

                        <h2>Am I under any obligation to sell my home if I fill out your Property Information Form?</h2>
                        <p>No! There is no obligation on your side. We will simply review the information, make you an offer, and you choose to accept or reject it, totally your choice!</p>
                        <br></br>

                        <h2>Is my information kept confidential?</h2>
                        <p>ABSOLUTELY 100%! Your privacy is of the utmost importance to us. Any information you provide is completely confidential. If you want to deal with a reliable, reputable company who will treat you with professionalism, understanding, and respect – YOU HAVE COME TO THE RIGHT PLACE!</p>
                        <br></br>

                        <h2>If I know of another property your company may want to buy, do you pay a referral fee?</h2>
                        <p>YES! Maybe there is a vacant house on your street or you know someone who needs and wants to sell their home, please refer them to us! Better yet, provide us their information and we will do all the research and make an offer. In some cases we will pay you up to $1,500 for a referral! Contact us directly to discuss the terms.</p>
                        <br></br>

                        <h2>What if I am behind on my payments, in foreclosure or bankruptcy? Are you still able help?</h2>
                        <p>YES! JADA Home Solutions is a professional real estate solutions company with years of experience in solving these types of difficult situations. Please contact us for a confidential consultation.</p>
                        <br></br>

                        <h2>I still have questions!</h2>
                        <p>Contact us with your question and we’ll be happy to assist you! Call us right now at 312-883-JADA (312-883-5232)</p>
                        <br></br>
                    </div>
                }
            />
        </div>
    )
}