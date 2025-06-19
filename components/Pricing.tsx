import PricingCard from "./PricingCard";

type IconType = "lite" | "pro" | "elite";

// Pricing.tsx
const Pricing = () => {
    const plans = [
        {
            title: "LITE",
            price: 79,
            desc: "Perfect for small businesses and startups.",
            features: [
                "Inventory Management – Track Stock in Real-Time",
                "Monitor inventory levels and receive automatic low stock alerts",
                "Sales Analytics & Reporting – Gain Business Insights",
                "Track cash movements securely to prevent discrepancies",
                "Continue recording sales even when offline with automatic data sync",
                "Connect a receipt printer, barcode scanner, and cash drawer",
                "Restaurant & Café Features – Perfect for Food Businesses",
                "Connect kitchen ticket printers for accurate order processing",
                "Generate custom barcode/QR code for items",
                "Manage waiters, cashiers, and customer orders efficiently",
                "Low stock indication",
                "Prevent negative stock sales",
                "Shift management",
                "Kitchen order ticketing (KOT)",
                "Product & category with image",
                "Customer & vendor transaction support",
                "KOT, table support",
                "Profit and loss calculation",
                "KOT support",
                "And a lot more"
            ],
            colors: {
                primary: "#5251D6",
                secondary: "#F1F1FE"
            },
            icon: "lite"
        },
        {
            title: "PRO",
            price: 149,
            desc: "Ideal for growing businesses needing more control.",
            features: [
                "All Lite features plus:",
                "Advanced inventory management",
                "Multi-branch support",
                "Enhanced reporting and analytics",
                "Priority customer support",
                "Customizable dashboard",
                "Advanced user permissions",
                "Bulk import/export functionality",
                "API access",
                "And more premium features"
            ],
            colors: {
                primary: "#1DBF74",
                secondary: "#EEFFF7"
            },
            icon: "pro"
        },
        {
            title: "ELITE",
            price: 253,
            desc: "Best for high-volume or multi-branch businesses.",
            features: [
                "All Pro features plus:",
                "Unlimited branches",
                "Dedicated account manager",
                "24/7 priority support",
                "Custom development hours",
                "White-label solutions",
                "Advanced security features",
                "Onboarding and training",
                "Monthly business reviews",
                "And exclusive enterprise features"
            ],
            colors: {
                primary: "#EBA71A",
                secondary: "#FFFAEE"
            },
            icon: "elite"
        }
    ];

    return (
        <section className="px-4 sm:px-6 lg:px-8 xl:px-20 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-gilroy font-bold text-center text-primary mb-6 md:mb-10">
                    Choose the Right SANOFT Plan for Your Business
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {plans.map((plan, index) => (
                        <PricingCard 
                            key={index}
                            title={plan.title}
                            price={plan.price}
                            desc={plan.desc}
                            features={plan.features}
                            primary_color={plan.colors.primary}
                            second_color={plan.colors.secondary}
                            icon={plan.icon as IconType}
                            isPopular={plan.title === "PRO"} // Mark PRO as popular
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;