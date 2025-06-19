import Image from "next/image"
import { motion } from "framer-motion"

const Hero = () => {

    return (
        <section className="px-4 sm:px-8 md:px-5 lg:px-16 xl:px-24" aria-label="Main product introduction">
            <div className="flex flex-col md:flex-row mt-6 justify-between gap-2 md:gap-12">
                <div className="w-full md:w-1/2 flex flex-col pt-2 md:pt-6">
                    <motion.h5
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="my-5 font-medium text-lg font-gilroy"
                    >
                        Hello Malaysia!
                    </motion.h5>

                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="font-gilroy text-4xl md:text-5xl font-extrabold mb-3 md:mb-5 leading-tight"
                    >
                        <span className="text-primary font-bold ">SANOFT</span>{" "}
                        <span className="font-bold text-gray-700">POS</span> – Smart POS System for Restaurants & Retail
                        <br />
                    </motion.h1>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        <div className="text-lg font-regular font-gilroy">
                            Made for small restaurants & retail businesses. Now in Malaysia.
                            <div className="">
                                Exclusive Launch – <span className="font-playpen font-bold text-lg">Save 25%! </span> 
                                Celebrate With Us!
                                <Image
                                    src="/images/underline.png"
                                    alt="underline"
                                    width={115}
                                    height={100}
                                    className="relative ml-36 sm:mt-8  md:mt-0 xs:bottom-8 xsm:bottom-0 md:bottom-8 lg:bottom-0"
                                />
                            </div>
                        </div>
                    </motion.div>


                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="mt-16 md:mt-0  justify-center "
                >
                    <Image
                        src="/images/hero_img.png"
                        alt="hero"
                        width={650}
                        height={650}
                        className="w-full mx-auto xs:w-96 xs:h-72 xsm:w-96 xsm:h-80 md:w-[34rem] md:h-[26rem]"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
