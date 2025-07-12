import { NextRequest, NextResponse } from 'next/server';
import { sendContactMeEmail } from "@/utils/email/contact-me/utils";

export async function POST(req: NextRequest) {
  try {
    const { userEmail, message } = await req.json();
    await sendContactMeEmail(userEmail, message);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}