import { db } from "@/db/database";

export async function GET() {
  const q = "SELECT * FROM users";

  const data = await db.getConnection().then((connect) => connect.query(q));

  console.log(data[0]);

  return Response.json(data[0]);
}
