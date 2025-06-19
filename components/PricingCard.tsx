// PricingCard.tsx
import { useState, useRef, useEffect } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { PiMedalFill } from "react-icons/pi";
import { IoSparklesSharp } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";

type IconType = "lite" | "pro" | "elite";

type PricingCardProps = {
    features: string[];
    price: number;
    desc: string;
    title: string;
    second_color?: string;
    primary_color?: string;
    icon: IconType;
    isPopular?: boolean;
    visibleFeaturesCount?: number;
};

const PricingCard = ({ 
    features, 
    price, 
    desc, 
    title, 
    icon, 
    primary_color, 
    second_color,
    isPopular = false,
    visibleFeaturesCount = icon === "lite" ? 5 : 9
}: PricingCardProps) => {
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState('auto');
    
    const typeMap = {
        lite: <PiMedalFill className="text-[#5251D6] text-xl" />,
        pro: <IoSparklesSharp className="text-[#1DBF74] text-xl" />,
        elite: <FaCrown className="text-[#EBA71A] text-xl" />,
    };

    useEffect(() => {
        if (contentRef.current) {
            const featureElements = contentRef.current.querySelectorAll('li');
            if (featureElements.length > 0) {
                const featureHeight = featureElements[0].clientHeight;
                const newHeight = showAllFeatures 
                    ? `${contentRef.current.scrollHeight}px`
                    : `${featureHeight * Math.min(visibleFeaturesCount, features.length)}px`;
                setContentHeight(newHeight);
            }
        }
    }, [showAllFeatures, features.length, visibleFeaturesCount]);

    const currentIcon = typeMap[icon];
    const hasHiddenFeatures = features.length > visibleFeaturesCount;
    const visibleFeatures = showAllFeatures ? features : features.slice(0, visibleFeaturesCount);

    const toggleFeatures = () => setShowAllFeatures(!showAllFeatures);

    return (
        <div className="relative h-full">
            <div className={`max-h-max h-full flex flex-col border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${
                isPopular ? "ring-2 ring-primary" : ""
            }`}>
                {isPopular && (
                    <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
                        POPULAR
                    </div>
                )}
                
                <div className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                        <div 
                            className={`p-2 rounded-full flex-shrink-0`}
                            style={{ backgroundColor: second_color }}
                        >
                            {currentIcon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                            <p className="mt-1 text-gray-500">{desc}</p>
                        </div>
                    </div>

                    <div className="relative">
                        <div 
                            ref={contentRef}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ height: contentHeight }}
                        >
                            <ul className="space-y-3">
                                {visibleFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <div 
                                            className="flex-shrink-0 p-0.5 rounded-full mt-1"
                                            style={{ backgroundColor: second_color }}
                                        >
                                            <IoIosCheckmark 
                                                className="rounded-full text-lg"
                                                style={{ color: primary_color }}
                                            />
                                        </div>
                                        <span className="ml-3 text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {hasHiddenFeatures && (
                            <>
                                {!showAllFeatures && (
                                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                )}
                                <div className="pt-8">
                                    <button
                                        onClick={toggleFeatures}
                                        className={`w-full py-2 text-sm font-medium rounded-md transition-colors duration-200 relative z-10`}
                                        style={{ 
                                            backgroundColor: second_color,
                                            color: primary_color
                                        }}
                                    >
                                        {showAllFeatures ? 'Show Less' : `Show All Features (${features.length})`}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div 
                    className={`px-6 py-8 text-center mt-auto`}
                    style={{ backgroundColor: second_color }}
                >
                    <div className="flex items-center justify-center py-12">
                        <span className="text-4xl font-bold" style={{ color: primary_color }}>
                            RM{price}
                        </span>
                        <span className="ml-2 text-lg text-gray-600">/month</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;