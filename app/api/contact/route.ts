import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  eventType: z.string().min(2),
  guestCount: z.string().min(1),
  details: z.string().min(20),
});

export async function POST(request: Request) {
  const json = await request.json();
  const result = schema.safeParse(json);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
