import { Router, Request, Response, type IRouter } from "express";
import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "../lib/prisma";
import { contactLimiter } from "../middleware/rateLimit";

const router: IRouter = Router();
const resend = new Resend(process.env["RESEND_API_KEY"]);

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  country: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
  projectType: z.string().optional(),
});

function buildLeadEmailHtml(data: z.infer<typeof contactSchema>): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Georgia, serif; background: #f2ead8; color: #1a1209; margin: 0; padding: 0; }
          .wrapper { max-width: 600px; margin: 32px auto; background: #fff; border: 1px solid #1a1209; }
          .header { background: #1a1209; color: #f2ead8; padding: 24px 32px; }
          .header h1 { margin: 0; font-size: 22px; letter-spacing: 2px; text-transform: uppercase; }
          .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.7; font-style: italic; }
          .body { padding: 32px; }
          .field { margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e8dfc4; }
          .field:last-child { border-bottom: none; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.6; margin-bottom: 4px; }
          .value { font-size: 15px; line-height: 1.6; }
          .message-box { background: #f2ead8; border-left: 3px solid #8b1a1a; padding: 16px; font-style: italic; }
          .footer { background: #e8dfc4; padding: 16px 32px; font-size: 12px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <h1>New Project Lead</h1>
            <p>Received via tanishkkhare.dev contact form</p>
          </div>
          <div class="body">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value">${data.email}</div>
            </div>
            ${data.company ? `<div class="field"><div class="label">Company</div><div class="value">${data.company}</div></div>` : ""}
            ${data.country ? `<div class="field"><div class="label">Country</div><div class="value">${data.country}</div></div>` : ""}
            ${data.budget ? `<div class="field"><div class="label">Budget</div><div class="value">${data.budget}</div></div>` : ""}
            ${data.timeline ? `<div class="field"><div class="label">Timeline</div><div class="value">${data.timeline}</div></div>` : ""}
            ${data.projectType ? `<div class="field"><div class="label">Project Type</div><div class="value">${data.projectType}</div></div>` : ""}
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${data.message}</div>
            </div>
          </div>
          <div class="footer">
            Respond within 24 hours — hi@tanishkkhare.dev
          </div>
        </div>
      </body>
    </html>
  `;
}

function buildAutoReplyHtml(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Georgia, serif; background: #f2ead8; color: #1a1209; margin: 0; padding: 0; }
          .wrapper { max-width: 600px; margin: 32px auto; background: #fff; border: 1px solid #1a1209; }
          .header { background: #1a1209; color: #f2ead8; padding: 24px 32px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-style: italic; }
          .header .subtitle { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-top: 8px; opacity: 0.7; }
          .body { padding: 40px 32px; line-height: 1.8; }
          .body p { margin: 0 0 20px; }
          .signature { border-top: 1px solid #e8dfc4; padding-top: 20px; margin-top: 20px; }
          .signature strong { display: block; font-size: 16px; }
          .signature span { font-size: 12px; opacity: 0.7; font-style: italic; }
          .footer { background: #e8dfc4; padding: 16px 32px; font-size: 12px; text-align: center; }
          a { color: #8b1a1a; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <h1>Tanishk Khare</h1>
            <div class="subtitle">Full-Stack Developer · Bhopal, India</div>
          </div>
          <div class="body">
            <p>Dear ${name},</p>
            <p>
              Thank you for reaching out. I've received your message and I'm genuinely excited to learn
              more about your project.
            </p>
            <p>
              I review every inquiry personally and will respond within <strong>24 hours</strong> with
              my initial thoughts and, if it seems like a good fit, next steps for how we can work together.
            </p>
            <p>
              In the meantime, you're welcome to explore my work at
              <a href="https://tanishkkhare.dev/work">tanishkkhare.dev/work</a> or read some of
              my technical writing at <a href="https://tanishkkhare.dev/blog">tanishkkhare.dev/blog</a>.
            </p>
            <p>Talk soon,</p>
            <div class="signature">
              <strong>Tanishk Khare</strong>
              <span>Freelance Full-Stack Developer · India · <a href="https://tanishkkhare.dev">tanishkkhare.dev</a></span>
            </div>
          </div>
          <div class="footer">
            hi@tanishkkhare.dev · Bhopal, Madhya Pradesh, India
          </div>
        </div>
      </body>
    </html>
  `;
}

router.post("/", contactLimiter, async (req: Request, res: Response) => {
  try {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: parsed.error.flatten().fieldErrors,
      });
    }

    const data = parsed.data;

    await prisma.contactLead.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company ?? null,
        country: data.country ?? null,
        budget: data.budget ?? null,
        timeline: data.timeline ?? null,
        message: data.message,
        projectType: data.projectType ?? null,
        status: "NEW",
        source: "website",
      },
    });

    await Promise.allSettled([
      resend.emails.send({
        from: "Portfolio <noreply@tanishkkhare.dev>",
        to: ["hi@tanishkkhare.dev"],
        subject: `New Lead: ${data.name}${data.company ? ` — ${data.company}` : ""}`,
        html: buildLeadEmailHtml(data),
      }),
      resend.emails.send({
        from: "Tanishk Khare <hi@tanishkkhare.dev>",
        to: [data.email],
        subject: "Thanks for reaching out — I'll respond within 24 hours",
        html: buildAutoReplyHtml(data.name),
      }),
    ]);

    return res.json({
      success: true,
      message: "Message received. Tanishk will respond within 24 hours.",
    });
  } catch (err) {
    console.error("[Contact] POST / error:", err);
    return res.status(500).json({ success: false, error: "Failed to submit contact form" });
  }
});

export default router;
