import FeatureCard from "./FeatureCard"
import { motion } from "framer-motion"

const Features = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <section className="mt-12" aria-label="Product features">
            {/* <div className="feature_gradient"></div> */}
            <motion.h5
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="my-5 font-medium text-lg ml-2 text-center"
            >
                ── Features
            </motion.h5>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-8"
            >
                <motion.div className="flex flex-col md:flex-row sm:px-24 md:px-0 gap-5 md:gap-8 justify-between">
                    <FeatureCard image="feature_cloud" title="Cloud-based system" desc="Access anytime, anywhere" />
                    <FeatureCard image="feature_easy" title="Easy to use" desc="No tech skills needed" />
                    <FeatureCard
                        image="feature_qr"
                        title="QR Ordering"
                        desc="Customers can order from their phones"
                        img_style="w-[10rem] h-[10rem]"
                    />
                </motion.div>

                <motion.div className="flex flex-col sm:px-24 md:px-0 md:flex-row gap-5 md:gap-8 justify-between">
                    <FeatureCard
                        image="feature_payment"
                        title="Online Payments"
                        desc="Accept e-wallets & cards easily"
                        img_style="w-[12rem] h-[9rem]"
                    />
                    <FeatureCard
                        image="feature_sales"
                        title="Sales Reports"
                        desc="Track your daily, weekly & monthly revenue"
                        img_style="w-[10rem] h-[9rem]"
                    />
                    <FeatureCard
                        image="feature_profit"
                        title="Profit & Loss Statements"
                        desc="Know exactly how your business is performing"
                        img_style="w-[10rem] h-[10rem]"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Features
