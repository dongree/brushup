import { db } from "@/db/database";
import { Problem } from "@/types/problem";
import { extractUserid } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {}

export async function POST(req: Request) {
  const cookie = req.headers.get("cookie");
  if (!cookie) return NextResponse.json({ status: 404 });

  const userid = await extractUserid(cookie);

  const q =
    "INSERT INTO problems (userid, name, type, difficulty, link, idea, solvingHistory) VALUES (?,?,?,?,?,?,?)";
  const problemData: Problem = await req.json();
  const { name, type, difficulty, link, idea, isSolved } = problemData;

  await db
    .getConnection()
    .then((connect) =>
      connect.query(q, [
        userid,
        name,
        type,
        difficulty,
        link,
        idea,
        isSolved ? "O" : "X",
      ]),
    );

  return Response.json({});
}
