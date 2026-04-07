import { NextResponse } from "next/server";
import { ContactTopic } from "@prisma/client";
import { db } from "@/lib/db";
import { contactSchema } from "@/lib/validators";

const topicMap: Record<string, ContactTopic> = {
  Sales: ContactTopic.SALES,
  Enterprise: ContactTopic.ENTERPRISE,
  Integrations: ContactTopic.INTEGRATIONS,
  Support: ContactTopic.SUPPORT,
  Billing: ContactTopic.BILLING,
  Partnerships: ContactTopic.PARTNERSHIPS,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid request body",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, topic, company, message } = parsed.data;

    const lead = await db.contactLead.create({
      data: {
        name,
        email,
        topic: topicMap[topic],
        company: company || null,
        message,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        id: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
