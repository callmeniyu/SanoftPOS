import { motion } from "framer-motion"

type CustomeBtnProps = {
    text: string
    onClick: () => void
    disabled?: boolean
    customStyles?: string
}

const CustomBtn = ({ text, onClick, disabled, customStyles }: CustomeBtnProps) => {
  return (
    <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`h-8 p-3 bg-black font-gilroy text-white ${customStyles} flex justify-center items-center px-4  py-3 cursor-pointer`}
    >
        <p className="font-medium">{text}</p>
    </motion.div>
  )
}

export default CustomBtn