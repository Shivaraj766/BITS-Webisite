import { NextRequest, NextResponse } from "next/server";
import { Contact } from "@/app/api/models/contact";
import { connectToDatabase } from "@/app/api/models/db";
import { captureServerEvent } from "@/app/api/models/posthog";

export async function POST(request: NextRequest) {
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

    if (error instanceof Error && /missing mongodb_uri/i.test(error.message)) {
      return NextResponse.json(
        {
          error: "Database not configured. Set MONGODB_URI (and optionally MONGODB_URI_FALLBACK).",
        },
        { status: 500 }
      );
    }

    if (error instanceof Error && /topology|server selection|connect/i.test(error.message)) {
      const message = error.message;
      const isWhitelistIssue = /whitelist|network access|ip/i.test(message);
      const isAuthIssue = /auth|authentication|bad auth/i.test(message);

      return NextResponse.json(
        {
          error: isWhitelistIssue
            ? "Database connection failed: Atlas IP access list blocked this machine. Add your current public IP (or 0.0.0.0/0 for development) in Atlas Network Access."
            : isAuthIssue
              ? "Database connection failed: invalid Atlas DB username/password or auth database. Recheck MONGODB_URI credentials."
              : "Database connection failed. Check URI, Atlas network access/IP whitelist, and DNS. If SRV DNS fails, set MONGODB_URI_FALLBACK with a mongodb:// host list.",
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