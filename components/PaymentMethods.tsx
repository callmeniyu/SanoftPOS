import Image from "next/image"

const PaymentMethods = () => {
    return (
        <section
            className="px-4 sm:px-8 md:px-5 lg:px-16 xl:px-20 py-10 mt-24 bg-[#F2F2F2]/40 flex flex-col gap-10 "
            aria-label="Payment Methods"
        >
            <div className="w-full space-y-6">
                {/* E-Wallets Section */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center">
                    <div className="w-full md:w-1/6 flex justify-center md:justify-start">
                        <h2 className="font-gilroy text-xl md:text-2xl font-bold text-primary text-center md:text-left">
                            E Wallets
                        </h2>
                    </div>
                    <div className="w-full md:w-5/6">
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                            {["grabpay", "mae", "shopeepay", "touchngo"].map((wallet) => (
                                <div
                                    key={wallet}
                                    className="p-2 md:p-4 bg-white rounded-lg flex justify-center items-center"
                                >
                                    <Image
                                        src={`${wallet === "touchngo"  ? "/images/touchngo.svg" : `/images/${wallet}.png`}`}
                                        alt={wallet}
                                        width={70}
                                        height={60}
                                        className="w-14 md:w-20 h-auto"
                                    />
                                </div>
                            ))}
                            <div className="flex items-center ml-2 md:ml-4">
                                <h5 className="font-gilroy text-gray-500">and more</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-px bg-gray-300" />

                {/* Online Banking Section */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center">
                    <div className="w-full md:w-1/6 flex justify-center md:justify-start">
                        <h2 className="font-gilroy text-xl md:text-2xl font-bold text-primary text-center md:text-left">
                            Online Banking
                        </h2>
                    </div>
                    <div className="w-full md:w-5/6">
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                            {["cimbgroup", "maybank", "publicbank", "rhbbank"].map((bank) => (
                                <div key={bank} className="p-2 md:p-4 bg-white rounded-lg flex justify-center items-center">
                                    <Image
                                        src={`${bank === "cimbgroup"  ? "/images/cimbgroup.svg" : `/images/${bank}.png`}`}
                                        alt={bank}
                                        width={70}
                                        height={60}
                                        className="w-14 md:w-20 h-auto"
                                    />
                                </div>
                            ))}
                            <div className="flex items-center ml-2 md:ml-4">
                                <h5 className="font-gilroy text-gray-500">and more</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-px bg-gray-300" />

                {/* BNPL Section */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center">
                    <div className="w-full md:w-1/6 flex justify-center md:justify-start">
                        <h2 className="font-gilroy text-xl md:text-2xl font-bold text-primary text-center md:text-left">
                            Buy Now Pay Later
                        </h2>
                    </div>
                    <div className="w-full md:w-5/6">
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                            {["atome", "moby", "paylaterbygrab"].map((bnpl) => (
                                <div key={bnpl} className="p-2 md:p-4 bg-white rounded-lg flex justify-center items-center">
                                    <Image
                                        src={`/images/${bnpl}.png`}
                                        alt={bnpl}
                                        width={70}
                                        height={60}
                                        className="w-14 md:w-20 h-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="h-px bg-gray-300" />

                {/* Credit Cards Section */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center">
                    <div className="w-full md:w-1/6 flex justify-center md:justify-start">
                        <h2 className="font-gilroy text-xl md:text-2xl font-bold text-primary text-center md:text-left">
                            Credit Cards
                        </h2>
                    </div>
                    <div className="w-full md:w-5/6">
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                            {["mastercard", "unionpay", "visa"].map((card) => (
                                <div key={card} className="p-2 md:p-4 bg-white rounded-lg flex justify-center items-center">
                                    <Image
                                        src={`/images/${card}.png`}
                                        alt={card}
                                        width={70}
                                        height={60}
                                        className="w-14 md:w-20 h-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentMethods
