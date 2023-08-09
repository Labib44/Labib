import { useState } from "react";


const TabBar = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    console.log(toggleState);
    return (
        <div>
            <div className="grid grid-flow-col text-center border-b border-gray-200 text-gray-500">
                <button
                    onClick={() => toggleTab(1)}
                    type=""
                    className={
                        toggleState === 1
                            ? "flex justify-center border-b-4 border-transparent text-indigo-600 border-indigo-600 py-4"
                            : "flex justify-center py-4"
                    }
                >
                    Skills
                </button>
                <button
                    onClick={() => toggleTab(2)}
                    type=""
                    className={
                        toggleState === 2
                            ? "flex justify-center border-b-4 border-transparent text-indigo-600 border-indigo-600 py-4"
                            : "flex justify-center py-4"
                    }
                >
                    Experience
                </button>
                <button
                    onClick={() => toggleTab(3)}
                    type=""
                    className={
                        toggleState === 3
                            ? "flex justify-center border-b-4 border-transparent text-indigo-600 border-indigo-600 py-4"
                            : "flex justify-center py-4"
                    }
                >
                    Education
                </button>
            </div>
            <div className={toggleState === 1 ? " block" : " hidden"}>
                <h1>Tab 1</h1>
            </div>

            <div className={toggleState === 2 ? " block" : " hidden"}>
                <h1>Tab 2</h1>
            </div>
            
            <div className={toggleState === 2 ? " block" : " hidden"}>
                <h1>Tab 2</h1>
            </div>




        </div>
    );
};

export default TabBar;