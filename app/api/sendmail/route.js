
import { NextResponse } from 'next/server'

const DOMAIN = process.env.MAILGUN_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY;

export async function GET(req, res) {

  return NextResponse.json(response)
}

export async function POST(req, res) {
  const { fromEmail, mailText, formName } = await req.json();

  // Mailgun API endpoint
  const url = `https://api.mailgun.net/v3/${DOMAIN}/messages`;
  // Prepare the form data as URL encoded
  const formData = new URLSearchParams();
  formData.append('from', fromEmail);
  formData.append('to', 'designer@primetaxis.co.nz');
  formData.append('subject', formName);
  formData.append('text', mailText);


  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`api:${API_KEY}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Mailgun API responded with status: ${response.status}`);
    }

    const data = await response.json();
    // Use NextApiResponse type for auto-completion and proper response typing

    return NextResponse.json({ message: "This Worked", success: true, data: response });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error, success: false });
  }
};