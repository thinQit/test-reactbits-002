import { NextResponse } from "next/server";
import { CheckoutPlanId } from "@prisma/client";
import { db } from "@/lib/db";
import { checkoutSchema } from "@/lib/validators";

const planMap: Record<string, CheckoutPlanId> = {
  starter: CheckoutPlanId.STARTER,
  "pro-monthly": CheckoutPlanId.PRO_MONTHLY,
  "pro-annual": CheckoutPlanId.PRO_ANNUAL,
  "team-monthly": CheckoutPlanId.TEAM_MONTHLY,
  "team-annual": CheckoutPlanId.TEAM_ANNUAL,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = checkoutSchema.safeParse(body);

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

    const { planId, email, fullName, company, country } = parsed.data;

    const order = await db.checkoutIntent.create({
      data: {
        planId: planMap[planId],
        email,
        fullName,
        company: company || null,
        country,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        orderId: order.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/checkout error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
