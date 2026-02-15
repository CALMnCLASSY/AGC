import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json();

        // Email configuration - Replace with your actual email service
        // This is a placeholder that logs to console
        // For production, use services like:
        // - SendGrid, Mailgun, AWS SES, or Resend

        const emailContent = `
New Gold Quote Request

Purchase Type: ${formData.inquiryType}
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Has Proof of Funds: ${formData.proofOfFunds ? 'Yes' : 'No'}
    `;

        console.log('=== NEW QUOTE REQUEST ===');
        console.log(emailContent);
        console.log('========================');

        // TODO: Implement actual email sending
        // Example with Resend:
        // const { Resend } = require('resend');
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'quotes@africangold.co.tz',
        //   to: 'corporate@africangold.co.tz',
        //   subject: 'New Gold Quote Request',
        //   text: emailContent,
        // });

        return NextResponse.json({
            success: true,
            message: 'Quote request received'
        });
    } catch (error) {
        console.error('Error processing quote request:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process request' },
            { status: 500 }
        );
    }
}
