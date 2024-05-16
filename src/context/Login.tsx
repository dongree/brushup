'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Login({ providers, callbackUrl }: Props) {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl })}
            className="bg-red-200"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
