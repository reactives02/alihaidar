"use server";

import  {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendMail(formData:FormData) {
    // console.log("running on server...")
    const senderMail = formData.get("senderMail")
    const senderMessage = formData.get("senderMessage")
    // console.log(formData.get("senderMessage"))
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'zaininfo20@gmail.com',
        subject: 'Recuiter contacting...',
        reply_to: `${senderMail}`,
        html: `<b>${senderMessage}</b>`
      });
}