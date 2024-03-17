import FAQPageContent from "../components/FAQPage/FAQPageContent";
import { useEffect } from "react";

export default function FAQPage() {
    //Goes to top of page on redirect
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="faq-page">
            <FAQPageContent />
        </div>
    )
}