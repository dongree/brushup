"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex h-16 items-center justify-between bg-sky-300 px-10">
      <h1>Brush Up</h1>
      <div className="flex gap-5">
        <div>입력</div>
        {session ? (
          <button onClick={() => signOut()}>로그아웃</button>
        ) : (
          <button onClick={() => signIn()}>로그인</button>
        )}
      </div>
    </header>
  );
}
