import PricingCard from '../../../../component/PricingCard/PricingCard';


const Individual = () => {
    return (
        <div className='mt-5'>

            <div className='grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

                {/* card 1 */}
                <PricingCard
                    icon={"mdi:airballoon"}
                    title={"Basic Plan"}
                    amount={"09"}
                    time={"month"}
                    btnBg={'bg-secondary'}
                />

                {/* Card 2 */}
                <PricingCard
                    icon={"material-symbols:airplanemode-active"}
                    title={"Startup Plan"}
                    amount={"49"}
                    time={"month"}
                    btnBg={'bg-[#1C2F50]'}
                />

                {/* Card 3 */}
                <PricingCard
                    icon={"mdi:rocket"}
                    title={"Enterprise Plan"}
                    amount={"99"}
                    time={"month"}
                    btnBg={'bg-secondary'}
                />
            </div>
        </div>
    );
};

export default Individual;