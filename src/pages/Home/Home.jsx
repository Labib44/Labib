import About from "./About/About";
import Achievement from "./Achievement/Achievement";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import Works from "./Works/Works";


const Home = () => {
    return (
        <div>
            <About></About>
            <Services></Services>
            <Achievement></Achievement>
            <Works></Works>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;