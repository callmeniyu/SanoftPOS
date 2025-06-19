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

    const realTimeInventoryTracking = [
  "Instantly updates stock levels after every sale",
  "Low stock alerts to avoid shortages",
  "Syncs inventory across multiple locations",
  "Tracks product variants like size, color, or batch"
];

const salesReportsAnalytics = [
  "Get detailed daily, weekly, and monthly sales summaries",
  "Visual dashboards for quick performance insights",
  "Track top-selling items and peak hours",
  "Export reports for accounting or tax filing"
];

const kitchenPrinterCashDrawer = [
  "Seamless integration with kitchen order printers",
  "Supports auto-printing of receipts and order tickets",
  "Connects with cash drawers for secure transactions",
  "Custom printer settings for different departments"
];

const offlineSalesMode = [
  "Process sales even without internet",
  "Automatically syncs data when back online",
  "Prevents downtime during connectivity issues",
  "Maintains full access to product and pricing info"
];


    return (
        <section className="mt-24 px-6" aria-label="Product features">
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
                <motion.div className="flex flex-col md:flex-row xs:gap-7 sm:px-24 md:px-0 md:flex-wrap lg:gap-5 justify-center">
                    <FeatureCard
                        image="features_report"
                        title="Sales Reports & Analytics"
                        desc="Gain clear business insights through visual dashboards, detailed sales summaries, and performance tracking for smarter decision-making."
                        img_style="w-[8rem] h-[8rem]"
                    />

                    <FeatureCard
                        image="features_printer"
                        title="Kitchen Printer & Cash Drawer Compatible"
                        desc="Easily connect to kitchen printers and cash drawers for streamlined order processing, secure payments, and smooth in-store operations."
                        img_style="w-[8rem] h-[8rem]"
                    />
                    <FeatureCard
                        image="features_inventory"
                        title="Real-time Inventory Tracking"
                        desc="Keep your stock levels accurate with real-time updates after every sale, automatic low-stock alerts, and synced inventory across all locations."
                        img_style="w-[8rem] h-[8rem]"
                    />
                    <FeatureCard
                        image="features_offline"
                        title="Offline Sales Mode"
                        desc="Continue selling even when the internet goes down. All data syncs automatically once you're back online, ensuring uninterrupted service."
                        img_style="w-[8rem] h-[8rem]"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Features
