"use client"
import { motion } from "framer-motion"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Toast from "@/components/Toast"
import { useState } from "react"
import InquiryForm from "@/components/InquiryForm"
import PaymentMethods from "@/components/PaymentMethods"
import Pricing from "@/components/Pricing"

const Page = () => {
    const [toast, setToast] = useState<{
        status: boolean
        type: "" | "success" | "error"
        message?: string
    }>({
        status: false,
        type: "",
        message: "",
    })

    // Example function to trigger toast
    const showSuccessToast = () => {
        setToast({
            status: true,
            type: "success",
            message: "Your action was successful!",
        })
    }

    const showErrorToast = () => {
        setToast({
            status: true,
            type: "error",
            message: "Something went wrong!",
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-x-hidden md:bg-transparent"
        >
            {/* <Image src="/images/hero_bgshape.png" alt="underline" width={500} height={500} className="absolute right-0 top-0" /> */}
            <Navbar  />
            <Hero  />
            <InquiryForm setToast={setToast}/>
        <Features />
            <PaymentMethods />
            <Pricing />
            <Footer />
            <Toast toast={toast} setToast={setToast} autoClose={3000} />
        </motion.div>
    )
}

export default Page
