import SellYourHomeContent from "../components/SellYourHomePage/SellYourHomeContent";
import { useEffect } from "react";

export default function SellYourHomePage() {
    //Goes to top of page on redirect
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="sell-your-home-page">
            <SellYourHomeContent />
        </div>
    )
}