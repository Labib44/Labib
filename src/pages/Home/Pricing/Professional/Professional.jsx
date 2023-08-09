import PricingCard from "../../../../component/PricingCard/PricingCard";


const Professional = () => {
    return (
        <div className='mt-5'>

            <div className='grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

                {/* card 1 */}
                <PricingCard
                    icon={"mdi:airballoon"}
                    title={"Basic Plan"}
                    amount={"199"}
                    time={"Yearly"}
                    btnBg={'bg-[#1C2F50]'}
                />

                {/* Card 2 */}
                <PricingCard
                    icon={"material-symbols:airplanemode-active"}
                    title={"Startup Plan"}
                    amount={"249"}
                    time={"Yearly"}
                    btnBg={'bg-secondary'}
                />

                {/* Card 3 */}
                <PricingCard
                    icon={"mdi:rocket"}
                    title={"Enterprise Plan"}
                    amount={"299"}
                    time={"Yearly"}
                    btnBg={'bg-secondary'}
                />
            </div>
            
        </div>
    );
};

export default Professional;