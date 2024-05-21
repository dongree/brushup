"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex h-16 items-center justify-between bg-sky-300 px-10">
      <h1>Brush Up</h1>
      <div className="flex gap-5">
        <Button>입력</Button>
        {session ? (
          <Button onClick={() => signOut()}>로그아웃</Button>
        ) : (
          <Button onClick={() => signIn()}>로그인</Button>
        )}
      </div>
    </header>
  );
}
