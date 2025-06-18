import React from "react"
import CustomBtn from "./CustomBtn"
import { motion } from "framer-motion"

type NavbarProps = {}

const Navbar = ({}: NavbarProps) => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center py-4 sm:py-6 px-4 sm:px-8 md:px-5 lg:px-16 xl:px-24"
        >
            <motion.h4 whileHover={{ scale: 1.1 }} className="text-xl sm:text-2xl font-bold font-poppins tracking-normal">
                <span className="text-primary">SANOFT</span> <span className="text-gray-700">POS</span>
            </motion.h4>
            <CustomBtn
                text="Quote Now"
                onClick={() => {
                    const element = document.getElementById("inquiry-form")
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                    }
                }}
                customStyles="rounded-full py-4 sm:py-6 px-3 sm:px-4 text-sm sm:text-base newsletter"
            />
        </motion.div>
    )
}

export default Navbar
