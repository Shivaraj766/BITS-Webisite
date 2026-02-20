import { NextRequest, NextResponse } from "next/server";
import { Contact } from "@/app/api/models/contact";
import { connectToDatabase } from "@/app/api/models/db";
import { captureServerEvent } from "@/app/api/models/posthog";

const MONGODB_URI = process.env.MONGODB_URI || "";

export async function POST(request: NextRequest) {
  if (!MONGODB_URI) {
    return NextResponse.json(
      { error: "Database not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, inquiryType, message } = body;

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Create contact document
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      inquiryType: inquiryType || "General Inquiry",
      message: message.trim(),
      status: "new",
    });

    await captureServerEvent({
      distinctId: email.trim().toLowerCase(),
      event: "contact_form_submitted",
      properties: {
        inquiryType: inquiryType || "General Inquiry",
        hasPhone: Boolean(phone?.trim()),
      },
    });

    return NextResponse.json(
      { success: true, id: contact._id, message: "Message submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error && /topology|server selection|connect/i.test(error.message)) {
      return NextResponse.json(
        {
          error:
            "Database connection failed. Check MONGODB_URI, Atlas network access/IP whitelist, and DNS connectivity.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}