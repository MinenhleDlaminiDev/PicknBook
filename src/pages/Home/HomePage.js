import Hero from "./components/Hero";
import FeaturedProduct from "./components/FeaturedProduct";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import useTitle from "../../hooks/useTitle";

const HomePage = () => {
    useTitle("Pick 'n Book");
    
    return ( 
        <main className="w-11/12 my-0 mx-auto">
            <Hero />
            <FeaturedProduct />
            <Testimonials />
            <Faq />
        </main>
     );
}
 
export default HomePage;