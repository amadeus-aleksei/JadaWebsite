import ContractorsPageContent from "../components/ContractorsPage/ContractorsPageContent";
import { useEffect } from "react";

export default function ContractorsPage() {
    //Goes to top of page on redirect
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);    
    
    return (
        <div className="contractors-page">
            <ContractorsPageContent />
        </div>
    )
}