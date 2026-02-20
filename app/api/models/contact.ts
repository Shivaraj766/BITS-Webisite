import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: null },
  inquiryType: { type: String, default: "General Inquiry" },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "new" },
});

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);