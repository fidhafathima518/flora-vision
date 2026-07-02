import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TopSelling from "../components/TopSelling";
import Button from "../components/button";
import OxygenSection from "../components/OxygenSection";
import Reviews from "../components/Reviews";
import TrendingPlants from "../components/TrendingPlants";
import Footer from "../components/Footer";
import backgroundImage from "../assets/plants/backgroundimage.png"
export default function Home(){
    return(
        <div>
        
            <div 
            className="bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
            >
                <Navbar />
            <Hero/>
            <TrendingPlants/>
            </div>
            <TopSelling/>
            <Button/>
            <Reviews/>
            <OxygenSection/>
            <Footer />
        </div>
    );
}