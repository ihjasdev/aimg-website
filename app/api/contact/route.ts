import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
// Validation schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = result.data;

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Email options
    const mailOptions = {
      from: {
        name: "AIMGeneration",
        address: process.env.SMTP_FROM!,
      },
      replyTo: email,
      to: process.env.SMTP_TO,
      cc: email,
      subject: `Contact Form Submission: ${subject}`,
      text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}

      Message:
      ${message}
      `,
      html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", {
      message: error instanceof Error ? error.message : 'Unknown error',
      code: error instanceof Error ? (error as { code?: string }).code : undefined,
      command: error instanceof Error ? (error as { command?: string }).command : undefined,
    });

    let errorMessage = "Failed to send message.";
    if (error instanceof Error && (error as { code?: string }).code === "EAUTH") {
      errorMessage = "Email server authentication failed.";
    } else if (error instanceof Error && (error as { code?: string }).code === "ESOCKET") {
      errorMessage = "Failed to connect to email server.";
    }

    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
