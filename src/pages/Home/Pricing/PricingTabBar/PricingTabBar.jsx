import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { TfiBag } from "react-icons/tfi";

const PricingTabBar = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div>
            <div className="flex justify-center">
                <div
                    onClick={() => toggleTab(1)}
                    type=""
                    className={
                        toggleState === 1
                            ? "bg-gray-200 cursor-pointer rounded-lg p-5 m-5 transition duration-700 ease-linear"
                            : " rounded-lg p-5 m-5"
                    }
                >
                    
                        <FaUser className={toggleState === 1 ? "w-auto mx-auto text-xl": "invisible w-auto mx-auto text-xl"}></FaUser>
                        <p className="text-primary text-center text-xl font-semibold mt-2">Individual</p>
                        <p className="text-accent ">For Monthly Project</p>
                   
                </div>

                <div
                    onClick={() => toggleTab(2)}
                    type=""
                    className={
                        toggleState === 2
                            ? "bg-gray-200 cursor-pointer rounded-lg p-5 m-5 transition duration-700 ease-linear"
                            : " rounded-lg p-5 m-5"
                    }
                >
                    
                        <TfiBag className={toggleState === 2 ? "w-auto mx-auto text-xl": " invisible w-auto mx-auto text-xl"}></TfiBag>
                        <p className="text-primary text-center text-xl font-semibold mt-2">Professional</p>
                        <p className="text-accent ">For Yearly Project</p>
                   
                </div>

            </div>
            <div className={toggleState === 1 ? " block" : " hidden"}>
                <h1>Tab 1</h1>
            </div>

            <div className={toggleState === 2 ? " block" : " hidden"}>
                <h1>Tab 2</h1>
            </div>

        </div>
    );
};

export default PricingTabBar;