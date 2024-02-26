import Hero from "../components/Hero/Hero"
import HomePageContent from "../components/HomePageContent/HomePageContent"

export default function HomePage() {
    return (
        <div className="home-page">
            <Hero />
            <HomePageContent />
        </div>
    )
}