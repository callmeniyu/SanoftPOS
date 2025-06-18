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
    visibleFeaturesCount = 6
}: PricingCardProps) => {
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [contentHeight, setContentHeight] = useState("auto");
    const contentRef = useRef<HTMLDivElement>(null);
    
    const typeMap = {
        lite: <PiMedalFill className="text-[#5251D6] text-xl" />,
        pro: <IoSparklesSharp className="text-[#1DBF74] text-xl" />,
        elite: <FaCrown className="text-[#EBA71A] text-xl" />,
    };

    useEffect(() => {
        if (contentRef.current) {
            // Get the full height of the content when showing all features
            if (showAllFeatures) {
                setContentHeight(`${contentRef.current.scrollHeight}px`);
                setTimeout(() => {
                    setContentHeight("auto");
                }, 300);
            } else {
                // Set height to the initial visible features height
                setContentHeight(`${contentRef.current.scrollHeight}px`);
                setTimeout(() => {
                    if (contentRef.current) {
                        const firstFeature = contentRef.current.querySelector("li:first-child");
                        if (firstFeature) {
                            const featureHeight = firstFeature.clientHeight;
                            setContentHeight(`${featureHeight * visibleFeaturesCount}px`);
                        }
                    }
                }, 10);
            }
        }
    }, [showAllFeatures, features.length, visibleFeaturesCount]);

    const currentIcon = typeMap[icon];
    const visibleFeatures = showAllFeatures ? features : features.slice(0, visibleFeaturesCount);
    const hasHiddenFeatures = features.length > visibleFeaturesCount;

    const toggleFeatures = () => {
        setShowAllFeatures(!showAllFeatures);
    };

    return (
        <div className="flex-1 border-[1px] border-gray-100 rounded-2xl shadow-lg overflow-hidden max-h-max">
            <div className="flex gap-4 px-5 py-8">
                <div
                    className={`${
                        icon == "lite" ? "bg-[#F1F1FE]" : icon == "pro" ? "bg-[#EEFFF7]" : "bg-[#FFFAEE]"
                    } p-2 rounded-full flex items-center justify-center w-10 h-10`}
                >
                    {currentIcon}
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-3xl font-gilroy font-bold tracking-wider">{title}</div>
                    <div className="text-gray-500 text-sm font-gilroy">{desc}</div>
                </div>
            </div>

            <hr />

            <div className="relative">
                <div
                    ref={contentRef}
                    className="overflow-hidden transition-all duration-11300 ease-in-out"
                    style={{ height: contentHeight }}
                >
                    <ul className="flex flex-col gap-2 p-4">
                        {features.map((feature, index) => (
                            <li 
                                key={index} 
                                className="flex gap-2 items-start"
                                style={{ display: showAllFeatures || index < visibleFeaturesCount ? "flex" : "none" }}
                            >
                                <div className={`p-[0.5px] rounded-full mt-1 ${icon == "lite" ? "bg-[#F1F1FE]" : icon == "pro" ? "bg-[#EEFFF7]" : "bg-[#FFFAEE]"}`}>
                                    <IoIosCheckmark className={`rounded-full text-lg ${icon == "lite" ? "text-[#5251D6]" : icon == "pro" ? "text-[#1DBF74]" : "text-[#EBA71A]"}`}/>
                                </div>
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {hasHiddenFeatures && (
                    <>
                        {!showAllFeatures && (
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                        )}
                        <div className="flex justify-center pb-4">
                            <button
                                onClick={toggleFeatures}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    icon == "lite" 
                                        ? "bg-[#F1F1FE] text-[#5251D6] hover:bg-[#e0e0fc]" 
                                        : icon == "pro" 
                                            ? "bg-[#EEFFF7] text-[#1DBF74] hover:bg-[#d5f7e8]" 
                                            : "bg-[#FFFAEE] text-[#EBA71A] hover:bg-[#f5eed6]"
                                }`}
                            >
                                {showAllFeatures ? "See Less" : `See More (${features.length - visibleFeaturesCount}+)`}
                            </button>
                        </div>
                    </>
                )}
            </div>

            <div className={`mt-8 py-20 w-full flex justify-center items-center ${icon == "lite" ? "bg-[#F1F1FE]" : icon == "pro" ? "bg-[#EEFFF7]" : "bg-[#FFFAEE]"}`}>
                <h1 className="text-4xl font-gilroy font-bold">RM{price}</h1>
                <p className="font-gilroy text-lg text-gray-500"> /month</p>
            </div>
        </div>
    );
};

export default PricingCard;