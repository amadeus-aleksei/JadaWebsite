import AboutPageContent from "../components/AboutPage/AboutPageContent"
import { useEffect } from "react";

export default function AboutPage() {
    //Goes to top of page on redirect
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="about-page">
            <AboutPageContent />
        </div>
    )
}