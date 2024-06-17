import Link from "next/link";
import { getServerSession } from "next-auth";
import SubmenuOnLogin from "@/components/SubMenuOnLogin";
import SubMenuOnLogout from "@/components/SubMenuOnLogout";
import { authOptions } from "@/lib/auth";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex h-16 items-center justify-between bg-gray-100 px-10">
      <h1 className="text-lg font-semibold">
        <Link href={"/"}> Brush Up</Link>
      </h1>
      {session ? <SubmenuOnLogin /> : <SubMenuOnLogout />}
    </header>
  );
}
