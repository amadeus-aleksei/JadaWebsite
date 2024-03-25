import "./ContractorsPageContent.scss"
import InfoCard from "../InfoCard/InfoCard"
import ContractorCard from "./ContractorCard/ContractorCard"

export default function ContractorsPageContent() {
    return (
        <div className="contractors-page-content">
            <InfoCard 
                header={<h1 className="info-card__header">Contractor Application</h1>}
                content={
                    <ContractorCard />
                }
            />
        </div>
    )
}