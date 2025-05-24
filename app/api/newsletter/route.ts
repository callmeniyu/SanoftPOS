import { NextRequest, NextResponse } from "next/server";
import * as SibApiV3Sdk from "@sendinblue/client";

export const POST = async (req: NextRequest) => {
    
    try {
        // ✅ Parse request body
        const body = await req.json();
        const email = body.email; // Extract email from request body

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // ✅ Initialize Brevo (Sendinblue) API
        const apiInstance = new SibApiV3Sdk.ContactsApi();
        if (process.env.BREVO_API_KEY) {
            apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY);
        } else {
            console.error("BREVO_API_KEY is not defined");
            return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        }

        // ✅ Subscribe user
        const contact = await apiInstance.createContact({
            email: email,
            listIds: [3],
        });

        return NextResponse.json({ message: "Subscribed successfully", contact }, { status: 200 });

    } catch (error) {
        console.error("Error subscribing user:", error);
        return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }
};
