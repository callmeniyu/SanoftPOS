import CustomBtn from "./CustomBtn"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center py-6"
        >
            <h4 className="text-2xl font-extrabold font-gilroy tracking-normal">BillO</h4>
            <CustomBtn
                text="Newsletter"
                onClick={() => console.log("clicked")}
                disabled
                customStyles="rounded-full md:py-6 py-5 newsletter"
            />
        </motion.div>
    )
}

export default Navbar
