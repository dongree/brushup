import { db } from "@/db/database";
import { extractUserid } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie");
  if (!cookie?.includes("next-auth.session-token="))
    return NextResponse.json([]);

  const userid = await extractUserid(cookie);

  const q = `SELECT COUNT(*) as count FROM problems WHERE userid=${userid}`;
  const result = await db.getConnection().then((connect) => connect.query(q));

  const count = (result[0] as any)[0].count;
  return Response.json(count);
}
