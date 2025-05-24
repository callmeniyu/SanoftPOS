"use client"
import { motion } from "framer-motion"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Toast from "@/components/Toast"
import { useRef, useState } from "react"

const Page = () => {
const [toast, setToast] = useState<{
      status: boolean
      type: "" | "success" | "error"
      message?: string
    }>({ 
      status: false, 
      type: "", 
      message: "" 
    })

    // Example function to trigger toast
    const showSuccessToast = () => {
      setToast({
        status: true,
        type: "success",
        message: "Your action was successful!"
      })
    }

    const showErrorToast = () => {
      setToast({
        status: true,
        type: "error",
        message: "Something went wrong!"
      })
    }

    const emailInputRef = useRef<HTMLInputElement>(null) as React.RefObject<HTMLInputElement>

    const handleNewsletterClick = () => {
      if (emailInputRef.current) {
        // Smooth scroll to the input
        emailInputRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        })
        
        // Add a slight delay before focusing for better UX
        setTimeout(() => {
          emailInputRef.current?.focus()
          
          // Add a pulsing animation
          emailInputRef.current?.animate([
            { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' },
            { boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.3)' },
            { boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' }
          ], {
            duration: 1500,
            iterations: 1
          })
        }, 500)
      }
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-x-hidden px-4 md:px-5 lg:px-16 sm:px-8 md:bg-transparent"
        >
            <Navbar scrollToNewsletter={handleNewsletterClick} />
            <Hero setToast={setToast} emailInputRef={emailInputRef} />
            <Features />
            <Footer />
            <Toast toast={toast} setToast={setToast} autoClose={3000} />
        </motion.div>
    )
}

export default Page
