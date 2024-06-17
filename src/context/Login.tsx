"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";

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
            className="rounded-lg border-2 border-gray-300 px-4 py-2 font-medium transition ease-in hover:bg-gray-200"
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
