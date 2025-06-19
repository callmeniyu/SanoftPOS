import Image from "next/image"
const InvoiceBanner = () => {
    return (
        <section className="flex my-8 gap-5 justify-center bg-primary h-96 relative overflow-hidden border-y-2 banner-pattern-left">
            {/* <Image src="/images/banner_shape.png" alt="banner-shape" width={360} height={360} className="absolute right-0" /> */}
            <div className="w-1/2 flex justify-center items-center">
                <h2 className="xs:text-2xl md:text-4xl font-bold font-gilroy text-white text-center">Malaysia E-Invoice Ready!</h2>
            </div>
            <div className="w-1/2 flex items-center justify-center bg-white banner-pattern-right">
                <Image src="/images/invoice_img.png" alt="e-invoice" width={215} height={200} className="" />
            </div>
        </section>
    )
}

export default InvoiceBanner
