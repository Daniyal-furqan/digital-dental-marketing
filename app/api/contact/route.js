import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, businessType, message } = data;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Since we don't have actual SMTP credentials yet, we simulate or log it.
    // Replace these config values with actual SMTP credentials in the future.
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    */

    // Prepare email
    const mailOptions = {
      from: '"Digital Dental Website" <noreply@digitaldentalmarketing.co.uk>',
      to: 'digidaniyal@gmail.com, info@digitaldentalmarketing.co.uk',
      subject: `New Lead: ${businessType || 'Dental Practice'} - ${name}`,
      text: `
        New Lead Submission from Digital Dental Marketing:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Business Type: ${businessType || 'Not specified'}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business Type:</strong> ${businessType || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Normally we would call transporter.sendMail(mailOptions);
    // For now, let's just log success and pretend it sent, since no credentials exist.
    console.log("Mock Email Sent Configuration:", mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
