"use client"
import Image from "next/image"
import CustomBtn from "./CustomBtn"
import { useState } from "react"

const InquiryForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsappNumber: "",
        businessName: "",
        businessType: "",
        state: "",
    });
    
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.whatsappNumber) {
        setSubmitStatus({type: 'error', message: 'Please fill in all required fields'});
        return;
    }

    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ''});

    try {
        const response = await fetch('https://emailworker.sanoftpos.workers.dev', { // ✅ Updated URL
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success) {
            setSubmitStatus({type: 'success', message: 'Thank you! We\'ve received your inquiry. Check your email for confirmation.'});
            setFormData({ 
                name: '', 
                email: '', 
                whatsappNumber: '', 
                businessName: '', 
                businessType: '', 
                state: '' 
            });
        } else {
            throw new Error(data.error || 'Failed to submit form');
        }
    } catch (error) {
        console.error("Submission error:", error);
        // setSubmitStatus({type: 'error', message: 'Failed to submit. Please try again later.'});
        console.log("Error details:", error);
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <section
            id="inquiry-form"
            className="mt-24 bg-gray-100 rounded-lg shadow-lg mx-4 sm:mx-8 md:mx-5 lg:mx-16 xl:mx-24"
        >
            <div className="">
                <div className="flex flex-col lg:flex-row gap-3">
                    <Image
                        src="/images/inquiry_img.png"
                        alt="inquiry"
                        width={450}
                        height={500}
                        className="object-cover rounded-t-lg lg:rounded-tl-lg lg:rounded-bl-lg lg:rounded-tr-none w-full lg:w-auto"
                    />
                    <div className="p-6 rounded-lg w-full">
                        <h2 className="font-gilroy text-3xl font-bold text-primary">
                            Limited to the First 100 Businesses Only. Act Fast!
                        </h2>
                        <p className="font-gilroy text-lg font-medium text-gray-600 mt-2">Join now and save 25%</p>
                        
                        {/* Status Message */}
                        {submitStatus.type && (
                            <div className={`mt-4 p-3 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <div className="mt-4">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="flex flex-col md:flex-row gap-4 justify-between">
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name*"
                                            className="w-full rounded-lg p-3 border-2 border-primary placeholder:text-gray-600"
                                            value={formData.name}
                                            onChange={(e)=> setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={(e)=> setFormData({ ...formData, email: e.target.value })}
                                            placeholder="Email*"
                                            className="w-full rounded-lg p-3 border-2 border-primary placeholder:text-gray-600"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 justify-between">
                                    <div className="w-full">
                                        <input
                                            type="tel"
                                            name="whatsappNumber"
                                            value={formData.whatsappNumber}
                                            onChange={(e)=> setFormData({ ...formData, whatsappNumber: e.target.value })}
                                            placeholder="Whatsapp Number*"
                                            className="w-full rounded-lg p-3 border-2 border-primary placeholder:text-gray-600"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={(e)=> setFormData({ ...formData, businessName: e.target.value })}
                                            placeholder="Business name"
                                            className="w-full rounded-lg p-3 border-2 border-primary placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 justify-between">
                                    <div className="w-full">
                                        <select
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={(e)=> setFormData({ ...formData, businessType: e.target.value })}
                                            className="w-full rounded-lg p-3 border-2 border-primary text-gray-600"
                                        >
                                            <option value="">Business Type</option>
                                            <option value="Cafe">Cafe</option>
                                            <option value="Clothing & Fashion">Clothing & Fashion</option>
                                            <option value="Computer & Electronics">Computer & Electronics</option>
                                            <option value="Cosmetics/Skincare/Perfume">Cosmetics/Skincare/Perfume</option>
                                            <option value="Grocery Store">Grocery Store</option>
                                            <option value="Gym & Fitness">Gym & Fitness</option>
                                            <option value="Hair & Beauty">Hair & Beauty</option>
                                            <option value="Laundry">Laundry</option>
                                            <option value="Pharmacy">Pharmacy</option>
                                            <option value="Quickserve/Kiosk/Foodtruck">Quickserve/Kiosk/Foodtruck</option>
                                            <option value="Restaurant">Restaurant</option>
                                            <option value="Spa & Massage">Spa & Massage</option>
                                            <option value="Home Business">Home Business</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="w-full">
                                        <select
                                            name="state"
                                            value={formData.state}
                                            onChange={(e)=> setFormData({ ...formData, state: e.target.value })}
                                            className="w-full rounded-lg p-3 border-2 border-primary text-gray-600"
                                        >
                                            <option value="">State</option>
                                            <option value="Johor">Johor</option>
                                            <option value="Kedah">Kedah</option>
                                            <option value="Kelantan">Kelantan</option>
                                            <option value="Kuala Lumpur">Kuala Lumpur</option>
                                            <option value="Labuan">Labuan</option>
                                            <option value="Melaka">Melaka</option>
                                            <option value="Negeri Sembilan">Negeri Sembilan</option>
                                            <option value="Pahang">Pahang</option>
                                            <option value="Penang">Penang</option>
                                            <option value="Perak">Perak</option>
                                            <option value="Perlis">Perlis</option>
                                            <option value="Putrajaya">Putrajaya</option>
                                            <option value="Sabah">Sabah</option>
                                            <option value="Sarawak">Sarawak</option>
                                            <option value="Selangor">Selangor</option>
                                            <option value="Terengganu">Terengganu</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-white font-gilroy font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                                    >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InquiryForm