import path from "path";
import fs from "fs";
import { sendEmail } from "../sendEmail";

export async function sendContactMeEmail(email: string, message: string) {
  const from = `sokainaasar.com <contact@sokainaasar.com>`;
  const to = "sasar@pratt.edu"
  const subject = "Message from Website";
  const templatePath = path.join(process.cwd(), "utils/email/contact-me/ContactMeTemplate.html");
  let html = fs.readFileSync(templatePath, "utf-8");

  html = html.replace("{{email}}", email);
  html = html.replace("{{message}}", message);
  
  await sendEmail(from, to, subject, html, email);
}