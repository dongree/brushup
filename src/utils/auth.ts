import { decode } from "next-auth/jwt";

export async function extractUserid(cookie: string) {
  const key = "next-auth.session-token=";
  const sesstionTokenIdx = cookie.indexOf(key) + key.length;
  const sessionToken = cookie.slice(sesstionTokenIdx);

  const decoded = await decode({
    token: sessionToken,
    secret: process.env.NEXTAUTH_SECRET || "",
  });

  const userid = decoded?.sub;

  return userid;
}
