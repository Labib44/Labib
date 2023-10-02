import PricingCard from "../../../../component/PricingCard/PricingCard";


const Professional = () => {
    return (
        <div className='mt-5'>

            <div className='grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

                {/* card 1 */}
                <PricingCard
                    icon={"mdi:airballoon"}
                    title={"Golden"}
                    amount={"2,50,000"}
                    time={"Year"}
                    btnBg={'bg-secondary'}
                    pages={'Web page design (10 Pages)'}
                    security={'Secure'}
                    socialMedia={'Facebook page maintainance'}
                    seo={'Gold SEO Service'}
                />

                {/* Card 2 */}
                <PricingCard
                     icon={"material-symbols:airplanemode-active"}
                     title={"Platinum"}
                     amount={"4,90,000"}
                     time={"Year"}
                     btnBg={'bg-[#1C2F50]'}
                     rgbBorder={'rgbBorder'}
                     pages={'Web page design (25 Pages)'}
                     security={'13 Layer Security System'}
                     socialMedia={'Facebook, Instagram, Linked In page maintainance'}
                     seo={'Platinum SEO Service'}
                />

                {/* Card 3 */}
                <PricingCard
                    icon={"mdi:rocket"}
                    title={"Premium"}
                    amount={"8,90,000"}
                    time={"Year"}
                    btnBg={'bg-secondary'}
                    pages={'40 + Pages'}
                    security={'Highly Secure'}
                    socialMedia={'Facebook page maintainance'}
                    seo={'Premium SEO Service'}
                />
            </div>
            
        </div>
    );
};

export default Professional;