"use client"
import Image from "next/image"
import CustomBtn from "./CustomBtn"
import { motion } from "framer-motion"
import { useState, forwardRef } from "react"

type HeroProps = {
    setToast: React.Dispatch<
        React.SetStateAction<{
            status: boolean
            type: "success" | "error" | ""
            message?: string
        }>
    >
    emailInputRef: React.RefObject<HTMLInputElement>
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ setToast, emailInputRef }, ref) => {
    const [email, setEmail] = useState("")

    const subscribeUser = async (email: string) => {
        try {
            if (!email) {
                setToast({
                    status: true,
                    type: "error",
                    message: "Did you forget to enter your email address?",
                })
                return
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
                setToast({
                    status: true,
                    type: "error",
                    message: "Seems like you entered an invalid email address",
                })
                return
            }
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })

            const data = await response.json()
            if (data) {
                setTimeout(() => {
                    setToast({
                        status: true,
                        type: "success",
                        message: "You've been added to our waitlist!",
                    })
                    setEmail("")
                }, 1000)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }
    return (
        <div className="">
            <div className="gradient"></div>
            <div className="flex flex-col md:flex-row mt-6 justify-between gap-5">
                <div className="w-full md:w-1/2 flex flex-col">
                    <motion.h5
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="my-5 font-medium text-lg font-gilroy"
                    >
                        ── Coming Soon
                    </motion.h5>

                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="font-gilroy text-4xl md:text-5xl font-extrabold mb-3 md:mb-5 leading-tight"
                    >
                        Billo – the budget-friendly POS system <br />
                    </motion.h1>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        <p className="text-lg font-regular font-gilroy">
                            Made for small food & beverage businesses. Now in Malaysia – starting from only RM2 per day!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="flex border-2 border-black rounded-full mb-3 mt-5 md:my-5 md:w-[28rem] justify-between"
                    >
                        <input
                            ref={emailInputRef}
                            type="text"
                            placeholder="Enter your email address"
                            className="bg-transparent rounded-full px-4 py-2 sm:py-3 focus:outline-none w-full text-sm sm:text-base transition-all duration-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && subscribeUser(email)}
                        />
                        <CustomBtn
                            text="Notify Me"
                            onClick={() => subscribeUser(email)}
                            disabled={!email}
                            customStyles="rounded-3xl w-40 py-6 relative "
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.7 }}
                        className="text-sm ml-2"
                    >
                        {"*Don't worry we will not spam you :)"}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-16 md:mt-0 min-w-max justify-center"
                >
                    <Image
                        src="/images/hero_img.png"
                        alt="hero"
                        width={450}
                        height={450}
                        className="w-full mx-auto mb-3  md:mr-10 relative md:bottom-5 xs:w-96 xs:h-96 md:w-[27rem] md:h-[27rem]"
                    />
                </motion.div>
            </div>
        </div>
    )
})

export default Hero
