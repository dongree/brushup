import { db } from "@/db/database";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie");
  if (!cookie?.includes("next-auth.session-token="))
    return NextResponse.json([]);

  const q = `SELECT * FROM problems WHERE DATE(willSolveNextAt) = CURDATE()`;
  const data = await db.getConnection().then((connect) => connect.query(q));

  return Response.json(data[0]);
}
