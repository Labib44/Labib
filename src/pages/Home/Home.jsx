import About from "./About/About";
import Achievement from "./Achievement/Achievement";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Connect from "./Connect/Connect";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import Works from "./Works/Works";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Achievement></Achievement>
            <Works></Works>
            <Pricing></Pricing>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Connect></Connect>
        </div>
    );
};

export default Home;