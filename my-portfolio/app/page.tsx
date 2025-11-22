import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HomeWorksPreview from "./components/HomeWorksPreview";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";


export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <HomeWorksPreview />
            <ServicesSection />
            <Footer />
        </>
    );
}