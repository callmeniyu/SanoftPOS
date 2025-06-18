import Image from "next/image"
import { motion } from "framer-motion"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type FeatureCardProps = {
    image: string
    title: string
    desc: string
    img_style?: string
    customStyles?: string
}

const FeatureCard = ({ image, title, desc, img_style }: FeatureCardProps) => {
    return (
        <motion.div 
            whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex-1 p-3 px-4 border-[1.5px] border-gray-400/30 rounded-2xl flex flex-col justify-center items-center gap-2 bg-gray-200/10 backdrop-blur-3xl`}
        >
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <Image 
                    src={`/images/${image}.png`} 
                    alt="feature" 
                    width={280} 
                    height={280} 
                    className={`${img_style}`}
                />
            </motion.div>
            <h3 className="text-xl font-gilroy font-bold text-primary text-center">{title}</h3>
            <p className="text-center text-gray-700 mt-2">{ desc}</p>
            {/* {features && features.length > 0 && (
                features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 w-full justify-between">
                        <IoIosCheckmarkCircleOutline />
                        <p className="text-base text-gray-600">{feature}</p>
                    </div>
                ))
            )} */}
        </motion.div>
    )
}

export default FeatureCard