import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion"
import Image from "next/image"

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-20 mb-5 py-4 sm:py-6 px-4 sm:px-8 md:px-5 lg:px-16 xl:px-24 "
        >
            <motion.hr
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="w-full h-[2px] bg-black "
            />
            <div className="flex flex-col md:flex-row md:justify-between mt-6 gap-4 items-center">
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:items-start gap-3"
                >
                    <div className="flex gap-3">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className="p-2 rounded-full bg-primary text-white cursor-pointer"
                        >
                            <FaWhatsapp className="text-2xl" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className="p-2 rounded-full bg-primary text-white cursor-pointer"
                        >
                            <FaInstagram className="text-2xl" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            className="p-2 rounded-full bg-primary text-white cursor-pointer"
                        >
                            <FaXTwitter className="text-2xl" />
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-gray-500 justify-end"
                >
                    <p className="w-72 mb-4 text-gray-700">
                        C-1-19, CAMERON FAIR, Jalan Camelia, Tanah Rata, 39000 Tanah Rata, Pahang
                    </p>
                    <p>Copyright@2025 Billo. All Rights Reserved.</p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Footer
