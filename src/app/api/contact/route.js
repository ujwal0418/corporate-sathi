import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;
    
    // Validate form data
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email and phone are required' },
        { status: 400 }
      );
    }

    // Create a test account if no SMTP credentials provided
    // This is useful for development/testing
    let testAccount;
    let transporter;
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      testAccount = await nodemailer.createTestAccount();
      
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } else {
      // Use provided SMTP credentials
      transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    }

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER || testAccount.user}>`,
      to: 'ujwal.raina.ur@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message || 'No message provided'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Message:</td>
              <td style="padding: 8px;">${message || 'No message provided'}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // Log URL for ethereal emails (for testing)
    if (testAccount) {
      console.log('Test email URL: %s', nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
