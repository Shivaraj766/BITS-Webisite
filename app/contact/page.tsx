"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "General Inquiry",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-[#0d1b4b] to-[#1e3a8a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">Home</Link> / Contact
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            We'd love to hear from you. Reach out for admissions, academic queries, or any other information.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="section-title">Get In Touch</h2>

              {[
                {
                  icon: "📍",
                  title: "Address",
                  lines: ["BITS Adoni, NH-44,", "Adoni - 518301,", "Kurnool District,", "Andhra Pradesh, India"],
                },
                {
                  icon: "📞",
                  title: "Phone",
                  lines: ["Main: +91-8562-223344", "Admissions: +91-8562-223345", "Principal: +91-8562-223346"],
                },
                {
                  icon: "✉",
                  title: "Email",
                  lines: ["principal@bitsadoni.ac.in", "admissions@bitsadoni.ac.in", "info@bitsadoni.ac.in"],
                },
                {
                  icon: "⏰",
                  title: "Working Hours",
                  lines: ["Mon–Fri: 9:00 AM – 5:00 PM", "Saturday: 9:00 AM – 1:00 PM", "Sunday: Closed"],
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-[#0d1b4b] mb-1">{item.title}</h3>
                    {item.lines.map((line) => (
                      <div key={line} className="text-sm text-gray-600">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="section-title">Send Us a Message</h2>
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
                    >
                      <option>Select inquiry type</option>
                      <option>Admissions</option>
                      <option>Academic Programs</option>
                      <option>Placements</option>
                      <option>Research Collaboration</option>
                      <option>Hostel Accommodation</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your message here..."
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send Message →"}
                    </button>

                    {status === "success" && (
                      <p className="text-sm text-green-600 text-center mt-3">
                        ✓ Message sent successfully! We'll get back to you soon.
                      </p>
                    )}

                    {status === "error" && (
                      <p className="text-sm text-red-600 text-center mt-3">
                        ✗ {errorMsg}
                      </p>
                    )}

                    <p className="text-xs text-gray-400 text-center mt-3">
                      We typically respond within 1-2 business days.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}