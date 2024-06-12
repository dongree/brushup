"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex h-16 items-center justify-between bg-gray-100 px-10">
      <h1 className="text-lg font-semibold">
        <Link href={"/"}> Brush Up</Link>
      </h1>
      <div className="flex gap-5">
        <Button>
          <Link href={"/create"}>입력</Link>
        </Button>
        {session ? (
          <Button onClick={() => signOut()}>로그아웃</Button>
        ) : (
          <Button onClick={() => signIn()}>로그인</Button>
        )}
      </div>
    </header>
  );
}
