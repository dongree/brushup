import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Login from "@/context/Login";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function LoginPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="mt-60 flex justify-center">
      <Login providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
