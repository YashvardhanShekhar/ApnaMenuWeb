import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, ownerName, RestaurantName, phoneNumber, message } = body;

    if (!email || !ownerName || !RestaurantName || !phoneNumber || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Send email to you
    await resend.emails.send({
      from: "ApnaMenu <onboarding@resend.dev>",
      to: "apnamenu69@gmail.com", 
      subject: "New Contact Form Submission - ApnaMenu",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Owner Name:</strong> ${ownerName}</p>
        <p><strong>Restaurant Name:</strong> ${RestaurantName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
