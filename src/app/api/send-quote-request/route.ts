import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json();

        const emailContent = `
New Gold Quote Request

Purchase Type: ${formData.inquiryType}
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Has Proof of Funds: ${formData.proofOfFunds ? 'Yes' : 'No'}

---
This quote request was submitted via African Gold Company website.
Please contact the customer within 24 hours.
    `;

        // Send email using Resend
        // Note: You need to install resend and set up RESEND_API_KEY environment variable
        // Install: npm install resend
        // Get API key from: https://resend.com

        if (process.env.RESEND_API_KEY) {
            const { Resend } = await import('resend');
            const resend = new Resend(process.env.RESEND_API_KEY);

            await resend.emails.send({
                from: 'quotes@africangoldcompany.com', // Must be a verified domain in Resend
                to: 'pureafricagold@gmail.com',
                replyTo: formData.email, // User can reply directly to customer
                subject: `New Gold Quote Request - ${formData.inquiryType}`,
                text: emailContent,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #d4af37;">New Gold Quote Request</h2>
                        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p><strong>Purchase Type:</strong> ${formData.inquiryType}</p>
                            <p><strong>Name:</strong> ${formData.name}</p>
                            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
                            <p><strong>Company:</strong> ${formData.company}</p>
                            <p><strong>Has Proof of Funds:</strong> ${formData.proofOfFunds ? 'Yes' : 'No'}</p>
                        </div>
                        <p style="color: #666; font-size: 12px;">This quote request was submitted via African Gold Company website. Please contact the customer within 24 hours.</p>
                    </div>
                `
            });
        } else {
            // Fallback: Log to console if no API key configured
            console.warn('RESEND_API_KEY not set - email not sent');
            console.log('=== NEW QUOTE REQUEST ===');
            console.log(emailContent);
            console.log('========================');
        }

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
