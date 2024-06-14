// TODO : Data Table UI 보고 구성하기

import ProblemsTable from "@/components/organisms/ProblemsTable";
import { getMyProblem } from "@/service/problem";
import { cookies } from "next/headers";

export default async function MePage() {
  const key = "next-auth.session-token";
  const cookie = cookies().toString();
  const hasSesstionToken = !!cookie.includes(key);

  const problems = hasSesstionToken ? await getMyProblem(cookie) : [];

  return (
    <section className="mt-8 flex flex-col items-center">
      <h2 className="my-8 text-lg font-semibold">등록 문제</h2>
      <ProblemsTable problems={problems} />
    </section>
  );
}
