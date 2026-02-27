import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json();

        const emailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafafa; border-radius: 10px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #1a1a1a, #2d2d2d); padding: 28px 32px;">
                    <h2 style="color: #d4af37; margin: 0; font-size: 22px; letter-spacing: 1px;">🪙 New Gold Quote Request</h2>
                    <p style="color: #999; margin: 6px 0 0; font-size: 13px;">Via pureafricagold.com — respond within 24 hours</p>
                </div>
                <div style="padding: 28px 32px; background: #fff;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 12px 0; color: #888; width: 160px;">Purchase Type</td>
                            <td style="padding: 12px 0; font-weight: bold; color: #222;">${formData.inquiryType}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 12px 0; color: #888;">Name</td>
                            <td style="padding: 12px 0; font-weight: bold; color: #222;">${formData.name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 12px 0; color: #888;">Email</td>
                            <td style="padding: 12px 0;"><a href="mailto:${formData.email}" style="color: #d4af37;">${formData.email}</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 12px 0; color: #888;">Company</td>
                            <td style="padding: 12px 0; color: #222;">${formData.company || '—'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; color: #888;">Proof of Funds</td>
                            <td style="padding: 12px 0; color: #222;">${formData.proofOfFunds ? '✅ Yes' : '❌ No'}</td>
                        </tr>
                    </table>
                </div>
                <div style="padding: 16px 32px; background: #f5f5f5; text-align: center;">
                    <a href="mailto:${formData.email}?subject=Re: Your Gold Quote Request" 
                       style="display: inline-block; background: #d4af37; color: #1a1a1a; text-decoration: none; font-weight: bold; padding: 12px 28px; border-radius: 6px; font-size: 14px;">
                        Reply to ${formData.name}
                    </a>
                </div>
                <div style="padding: 12px 32px; text-align: center;">
                    <p style="color: #bbb; font-size: 11px; margin: 0;">African Gold Company · pureafricagold.com · sales@pureafricagold.com</p>
                </div>
            </div>
        `;

        const emailText = `
New Gold Quote Request — pureafricagold.com

Purchase Type: ${formData.inquiryType}
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || '—'}
Proof of Funds: ${formData.proofOfFunds ? 'Yes' : 'No'}

Reply directly to: ${formData.email}
        `.trim();

        if (process.env.RESEND_API_KEY) {
            const { Resend } = await import('resend');
            const resend = new Resend(process.env.RESEND_API_KEY);

            // FROM must exactly match the domain verified in Resend dashboard
            const result = await resend.emails.send({
                from: 'African Gold Company <quotes@pureafricagold.com>',
                to: ['sales@pureafricagold.com'],
                replyTo: formData.email,
                subject: `🪙 New Gold Quote — ${formData.inquiryType} (${formData.name})`,
                text: emailText,
                html: emailHtml,
            });

            // Log full result — visible in Vercel → Functions → Logs
            console.log('[Resend] result:', JSON.stringify(result));
            if (result.error) {
                console.error('[Resend] SEND FAILED:', result.error);
                throw new Error(result.error.message);
            }
        } else {
            console.warn('RESEND_API_KEY not set — email not sent');
            console.log('=== QUOTE REQUEST ===\n', emailText, '\n====================');
        }

        return NextResponse.json({ success: true, message: 'Quote request received' });

    } catch (error) {
        console.error('Quote route error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process request' },
            { status: 500 }
        );
    }
}
