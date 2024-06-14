"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SubmenuOnLogin() {
  return (
    <div className="flex gap-3">
      <Button>
        <Link href={"/create"}>입력</Link>
      </Button>
      <Button>
        <Link href={"/me"}>마이페이지</Link>
      </Button>
      <Button onClick={() => signOut()}>로그아웃</Button>
    </div>
  );
}
