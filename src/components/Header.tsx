'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center px-10 bg-sky-300 h-16">
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
