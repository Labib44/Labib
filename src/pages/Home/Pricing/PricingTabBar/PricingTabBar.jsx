import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import Individual from "../Individual/Individual";
import Professional from "../Professional/Professional";
import { useTheme } from "../../../../context/ThemeProvider/ThemeProvider";


const PricingTabBar = () => {
    const [toggleState, setToggleState] = useState(1);
    const { isDark} = useTheme();

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
                            ? "bg-gray-200 cursor-pointer rounded-lg p-5 lg:p-5 md:p-5 sm:p-3 m-3 transition duration-700 ease-linear"
                            : " rounded-lg p-5 lg:p-5 md:p-5 sm:p-3 m-3 cursor-pointer"
                    }
                >

                    <FaUser className={toggleState === 1 ? "w-auto mx-auto text-xl" : "invisible w-auto mx-auto text-xl"}></FaUser>
                    <p className="text-primary text-center text-xl font-semibold mt-2">Individual</p>
                    <p className="text-accent sm:text-sm">For Monthly Project</p>

                </div>

                <div
                    onClick={() => toggleTab(2)}
                    type=""
                    className={
                        toggleState === 2
                            ? "bg-gray-200 cursor-pointer rounded-lg p-5 lg:p-5 md:p-5 sm:p-3 m-3 transition duration-700 ease-linear"
                            : " rounded-lg p-5 lg:p-5 md:p-5 sm:p-3 m-3 cursor-pointer"
                    }
                >

                    <MdCardTravel className={toggleState === 2 ? "w-auto mx-auto text-xl" : " invisible w-auto mx-auto text-xl"}></MdCardTravel>
                    <p className="text-primary text-center text-xl font-semibold mt-2">Professional</p>
                    <p className="text-accent sm:text-sm">For Yearly Project</p>

                </div>

            </div>
            <div className={toggleState === 1 ? " block" : " hidden"}>
                <Individual></Individual>
            </div>

            <div className={toggleState === 2 ? " block" : " hidden"}>
                <Professional></Professional>
            </div>

        </div>
    );
};

export default PricingTabBar;