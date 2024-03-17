import ForSalePageContent from "../components/ForSalePage/ForSalePageContent"
import { useEffect } from "react";

export default function ForSalePage() {
    //Goes to top of page on redirect
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='for-sale-page'>
            <ForSalePageContent />
        </div>
    )
}