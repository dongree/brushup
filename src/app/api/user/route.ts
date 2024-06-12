import { db } from "@/db/database";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log(request.headers);

  const q = id ? `SELECT * FROM users WHERE id=${id}` : "SELECT * FROM users";
  console.log(q);
  const data = await db.getConnection().then((connect) => connect.query(q));

  return Response.json(data[0]);
}

export async function POST(req: Request) {
  const q =
    "INSERT INTO users (id, username, email, profileImageUrl) VALUES (?,?,?,?)";
  const userData = await req.json();
  const { userid, username, email, profileImageUrl } = userData;

  await db
    .getConnection()
    .then((connect) =>
      connect.query(q, [userid, username, email, profileImageUrl]),
    );

  return Response.json(userData);
}
