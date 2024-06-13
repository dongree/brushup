import { db } from "@/db/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cookie = req.headers.get("cookie");
  if (!cookie?.includes("next-auth.session-token="))
    return NextResponse.json({ status: 404 });

  const { id, isSolve } = await req.json();

  const q = `UPDATE problems SET solvingHistory = CONCAT(solvingHistory, '${isSolve ? "O" : "X"}') WHERE id=${id}`;
  await db.getConnection().then((connect) => connect.query(q));

  return Response.json({});
}
