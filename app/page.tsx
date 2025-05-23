"use client";

import { motion } from "framer-motion"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

const Page = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 md:px-20"
        >
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </motion.div>
    )
}

export default Page