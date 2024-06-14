"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function SubMenuOnLogout() {
  return <Button onClick={() => signIn()}>로그인</Button>;
}
