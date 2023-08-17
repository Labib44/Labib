import { useState, useEffect } from 'react';

const TabBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonials = [
        {
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            author: "John Doe",
        },
        {
            quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            author: "Jane Smith",
        },
        // Add more testimonials here
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="max-w-md mx-auto p-4">
                <div className="bg-white shadow-lg p-4 rounded-lg">
                    <p className="italic text-lg mb-4">{testimonials[activeIndex].quote}</p>
                    <p className="font-semibold">{testimonials[activeIndex].author}</p>
                </div>
            </div>
        </div>
    );
};

export default TabBar;