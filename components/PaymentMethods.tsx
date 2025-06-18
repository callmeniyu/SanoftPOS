import Image from "next/image"

const PaymentMethods = () => {
    return (
        <section
            className="px-4 sm:px-8 md:px-5 lg:px-16 xl:px-20 py-10 mt-24 bg-[#F2F2F2]/40 flex flex-col gap-10 "
            aria-label="Payment Methods"
        >
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-center items-center w-1/6">
                    <h2 className="text-center items-center font-gilroy text-2xl font-bold text-primary">E Wallets</h2>
                </div>
                <div className="w-4/6 flex justify-center">
                    <div className=" flex gap-5 justify-center">
                        <div className=" px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/grabpay.png" alt="icon" width={90} height={80} />
                        </div>
                        <div className=" px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/mae.png" alt="icon" width={90} height={80} />
                        </div>
                        <div className=" px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/shopeepay.png" alt="icon" width={90} height={80} />
                        </div>
                        <div className=" px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/touchngo.svg" alt="icon" width={90} height={80} />
                        </div>
                    </div>
                    <div>
                        <h5 className="ml-5 font-gilroy text-gray-500 h-full flex items-center">and more</h5>
                    </div>
                </div>
            </div>
            <hr className="h-[1.5px] bg-gray-300" />
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-center items-center w-1/6">
                    <h2 className="text-center items-center font-gilroy text-2xl font-bold text-primary">Online Banking</h2>
                </div>
                <div className="w-4/6 flex justify-center">
                    <div className=" flex gap-5 justify-center">
                        <div className="px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/cimbgroup.svg" alt="icon" width={90} height={80} />
                        </div>
                        <div className="px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/maybank.png" alt="icon" width={90} height={80} />
                        </div>
                        <div className="px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/publicbank.png" alt="icon" width={90} height={80} />
                        </div>
                        <div className="px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/rhbbank.png" alt="icon" width={90} height={80} />
                        </div>
                    </div>
                    <div>
                        <h5 className="ml-5 font-gilroy text-gray-500 h-full flex items-center">and more</h5>
                    </div>
                </div>
            </div>
            <hr className="h-[1.5px] bg-gray-300" />
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-center items-center w-1/6">
                    <h2 className="text-center items-center font-gilroy text-2xl font-bold text-primary">
                        Buy Now Pay Later
                    </h2>
                </div>
                <div className="w-4/6 flex justify-start">
                    <div className="ml-5 flex gap-5 justify-center">
                        <div className="py-8 px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/atome.png" alt="icon" width={90} height={80} />
                        </div>
                        <div className="py-8 px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/moby.png" alt="icon" width={90} height={80} />
                        </div>
                        <div className="py-8 px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/paylaterbygrab.png" alt="icon" width={90} height={80} />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-[1.2px] bg-gray-300" />
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-center items-center w-1/6">
                    <h2 className="text-center items-center font-gilroy text-2xl font-bold text-primary">
                        Buy Now Pay Later
                    </h2>
                </div>
                <div className="w-4/6 flex justify-start">
                    <div className="ml-5 flex gap-5 justify-center">
                        <div className="py-3 px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/mastercard.png" alt="icon" width={90} height={80} />
                        </div>
                        <div className="py-3 px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/unionpay.png" alt="icon" width={90} height={80} />
                        </div>
                        <div className="py-3 px-6 bg-white rounded-lg flex justify-center items-center">
                            <Image src="/images/visa.png" alt="icon" width={90} height={80} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentMethods
