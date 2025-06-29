import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Setup transporter using GoDaddy SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. mail.corporatesathi.com or smtp.zoho.in
      port: Number(process.env.SMTP_PORT) || 465, // typically 465 for SSL or 587 for TLS
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // e.g. info@corporatesathi.com
        pass: process.env.SMTP_PASS,
      },
    });

    // 1️⃣ Send notification to your own email
    const adminMailOptions = {
      from: `"CorporateSathi Website" <${process.env.SMTP_USER}>`,
      to: "info@corporatesathi.com",
      subject: "New Contact Form Submission",
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message || "No message provided"}</p>
          </div>
        `,
    };
    await transporter.sendMail(adminMailOptions);

    // 2️⃣ Send thank you email to the user
    const thankYouMailOptions = {
      from: `"CorporateSathi" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You for Contacting CorporateSathi!",
      html: `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 24px;">
      <div style="text-align: center; margin-bottom: 20px;">
        
        <h2 style="color: #A88941; margin: 0;">Corporate-साथी</h2>
        <p style="font-size: 14px; color: #888;">Premium Event Management Services</p>
      </div>

      <p style="font-size: 16px; color: #333;">Dear ${name},</p>

      <p style="font-size: 15px; color: #444;">
        Thank you for reaching out to <strong>CorporateSathi</strong>. We’ve received your inquiry and our team will get back to you shortly.
      </p>

      <p style="font-size: 15px; color: #444;">Meanwhile, feel free to explore our work or reach us directly if it’s urgent.</p>

      <div style="margin: 24px 0;">
        <a href="https://www.corporatesathi.com/" style="background-color: #A88941; color: white; padding: 10px 18px; text-decoration: none; font-weight: bold; border-radius: 4px;">Visit Website</a>
      </div>

      <p style="font-size: 14px; color: #666; line-height: 1.6;">
        Warm regards,<br/>
        <strong>Team CorporateSathi</strong><br/>
        <a href="mailto:info@corporatesathi.com" style="color: #A88941;">info@corporatesathi.com</a><br/>
        <a href="https://www.corporatesathi.com" style="color: #A88941;">www.corporatesathi.com</a>
      </p>

      <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />

      <p style="font-size: 12px; color: #999; text-align: center;">
        This is an automated message. Please do not reply.
      </p>
    </div>
  `,
    };

    await transporter.sendMail(thankYouMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
