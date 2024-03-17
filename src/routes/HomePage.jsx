import Hero from "../components/HomePage/Hero/Hero"
import HomePageContent from "../components/HomePage/HomePageContent/HomePageContent"
import { useEffect } from "react";

export default function HomePage() {
    //Goes to top of page on redirect
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="home-page">
            <Hero />
            <HomePageContent />
        </div>
    )
}