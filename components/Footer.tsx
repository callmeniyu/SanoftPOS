import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-20 my-12"
        >
            <motion.hr
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="w-full md:w-1/12 h-[2px] bg-black"
            />
            <div className="flex flex-col md:flex-row md:justify-between mt-6 gap-4 items-center ">
                <div className="flex gap-3 items-center">
                    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="p-2 rounded-full bg-black text-white">
                        <FaWhatsapp className="text-2xl" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="p-2 rounded-full bg-black text-white">
                        <FaInstagram className="text-2xl" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="p-2 rounded-full bg-black text-white">
                        <FaXTwitter className="text-2xl" />
                    </motion.div>
                </div>
                <motion.p
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-gray-500"
                >
                    Copyright@2025 Billo. All Rights Reserved.
                </motion.p>
            </div>
        </motion.div>
    )
}

export default Footer
