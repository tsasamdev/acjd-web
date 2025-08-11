import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email options
      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        replyTo: email,
        subject: subject || "Nouveau message de contact",
        text: message,
        html: `<p><b>Nom:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Sujet:</b> ${subject}</p><p><b>Message:</b><br/>${message}</p>`
      }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, error: "Erreur lors de l'envoi du message." }, { status: 500 })
  }
}
