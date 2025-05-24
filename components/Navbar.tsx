import React from "react"
import CustomBtn from "./CustomBtn"
import { motion } from "framer-motion"

type NavbarProps = {
  scrollToNewsletter?: () => void
}

const Navbar = ({ scrollToNewsletter }: NavbarProps) => {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center py-4 sm:py-6"
    >
      <motion.h4 
        whileHover={{ scale: 1.1 }}
        className="text-xl sm:text-2xl font-extrabold font-gilroy tracking-normal"
      >
        BillO
      </motion.h4>
      <CustomBtn 
        text="Newsletter" 
        onClick={scrollToNewsletter ?? (() => {})} 
        customStyles="rounded-full py-4 sm:py-6 px-3 sm:px-4 text-sm sm:text-base newsletter"
      />
    </motion.div>
  )
}

export default Navbar