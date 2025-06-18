import PricingCard from "./PricingCard"

const Pricing = () => {
    const litePlanFeatures = [
    "Inventory Management – Track Stock in Real-Time",
    "Monitor inventory levels and receive automatic low stock alerts",
    "Sales Analytics & Reporting – Gain Business Insights",
    "Track cash movements securely to prevent discrepancies",
    "Continue recording sales even when offline with automatic data sync",
    "Connect a receipt printer, barcode scanner, and cash drawer for a complete POS setup",
    "Restaurant & Café Features – Perfect for Food Businesses",
    "Connect kitchen ticket printers for accurate order processing",
    "Generate custom barcode/QR code for items",
    "Manage waiters, cashiers, and customer orders efficiently",
    "Low stock indication",
    "Prevent negative stock sales",
    "Shift management",
    "Kitchen order ticketing (KOT)",
    "product & category with image",
    "customer & vendor transaction support (max 1000 customers)",
    "KOT, table support",
    "profit and loss calculation",
    "KOT support",
    "and a lot more"
    ];
    
    const proPlanFeatures = [
  "Inventory Management – Track Stock in Real-Time",
  "Monitor inventory levels and receive automatic low stock alerts",
  "Sales Analytics & Reporting – Gain Business Insights",
  "Track cash movements securely to prevent discrepancies",
  "Continue recording sales even when offline with automatic data sync",
  "Connect a receipt printer, barcode scanner, and cash drawer for a complete POS setup",
  "Restaurant & Café Features – Perfect for Food Businesses",
  "Connect kitchen ticket printers for accurate order processing",
  "Generate custom barcode/QR code for items",
  "Manage waiters, cashiers, and customer orders efficiently",
  "Low stock indication",
  "Prevent negative stock sales",
  "Shift management",
  "Kitchen order ticketing (KOT)",
  "product & category with image",
  "customer & vendor transaction support (max 1000 customers)",
  "KOT, table support",
  "profit and loss calculation",
  "KOT support",
  "and a lot more"
];

    const elitePlanFeatures = [
  "Inventory Management – Track Stock in Real-Time",
  "Monitor inventory levels and receive automatic low stock alerts",
  "Sales Analytics & Reporting – Gain Business Insights",
  "Track cash movements securely to prevent discrepancies",
  "Continue recording sales even when offline with automatic data sync",
  "Connect a receipt printer, barcode scanner, and cash drawer for a complete POS setup",
  "Restaurant & Café Features – Perfect for Food Businesses",
  "Connect kitchen ticket printers for accurate order processing",
  "Generate custom barcode/QR code for items",
  "Manage waiters, cashiers, and customer orders efficiently",
  "Low stock indication",
  "Prevent negative stock sales",
  "Shift management",
  "Kitchen order ticketing (KOT)",
  "product & category with image",
  "customer & vendor transaction support (max 1000 customers)",
  "KOT, table support",
  "profit and loss calculation",
  "KOT support",
  "and a lot more"
];

  return (
      <section className="px-4 sm:px-8 md:px-5 lg:px-16 xl:px-20 mt-24 flex flex-col justify-center items-center gap-10">
          <h1 className="text-3xl font-gilroy font-bold text-center text-primary">Choose the Right SANOFT Plan for Your Business</h1>
          <div className="flex gap-8 mt-5">
              <PricingCard features={litePlanFeatures} price={79} desc="Perfect for small businesses and startups." title="LITE" second_color="#F1F1FE" primary_color="#5251D6" icon="lite"/>
              <PricingCard features={litePlanFeatures} price={149} desc="Ideal for growing businesses needing more control." title="PRO" second_color="#EEFFF7" primary_color="#1DBF74" icon="pro"/>
              <PricingCard features={litePlanFeatures} price={253} desc="Best for high-volume or multi-branch businesses." title="ELITE" second_color="#FFFAEE" primary_color="#EBA71A" icon="elite"/>
          </div>
    </section>
  )
}

export default Pricing