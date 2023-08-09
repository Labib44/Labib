import PricingTabBar from "./PricingTabBar/PricingTabBar";

const Pricing = () => {
    return (
        <div className="p-5">
            <div className="container mx-auto pt-32 pb-32 lg:pt-32 md:pt-20 sm:pt-20 px-36 lg:px-0 md:px-0 sm:px-0">
                <p className="text-xl text-accent text-center">Pricing</p>
                <h1 className="text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-primary font-bold text-center">Choose your Plan</h1>
                <p className="text-center py-2 px-5  text-accent text-xl mt-3">A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</p>

                {/* Pricing tab bar */}
                <div className="mt-10">
                    <PricingTabBar></PricingTabBar>
                </div>
            </div>
        </div>
    );
};

export default Pricing;