import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, phone, subject, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>${name} requested service via website contact form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Error sending mail:", err)
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
