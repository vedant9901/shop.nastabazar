import nodemailer from 'nodemailer'

const email = process.env.NEXT_PUBLIC_EMAIL_ID
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD

export const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587, // Use 465 for SSL
  secure: false, // Use true for SSL (port 465), false for TLS (port 587)
  auth: {
    user: email,
    pass: pass
  },
  tls: {
    rejectUnauthorized: false // Only if needed for self-signed certificates
  }
})

export const mailOptions = {
  from: email,
  to: email
}

export const getClientMailOptions = (data) => {
  return {
    from: email,
    to: data.client.email
  }
}
