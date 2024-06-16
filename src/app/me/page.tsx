import Pagenation from "@/components/Pagenation";
import ProblemsTable from "@/components/organisms/ProblemsTable";
import { PROBLEM_COUNT_PER_PAGE } from "@/constants/limit";
import { getMyProblem, getMyProblemCount } from "@/service/problem";
import { cookies } from "next/headers";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function MePage({ searchParams }: Props) {
  const key = "next-auth.session-token";
  const cookie = cookies().toString();
  const hasSesstionToken = !!cookie.includes(key);

  const pageNum = +(searchParams?.page || "1");
  const problems = hasSesstionToken ? await getMyProblem(cookie, pageNum) : [];
  const problemsCount = hasSesstionToken ? await getMyProblemCount(cookie) : 0;
  const maxPageNum =
    problemsCount % PROBLEM_COUNT_PER_PAGE === 0
      ? problemsCount / PROBLEM_COUNT_PER_PAGE
      : Math.floor(problemsCount / PROBLEM_COUNT_PER_PAGE) + 1;

  return (
    <section className="flex flex-col items-center gap-2">
      <h2 className="my-4 text-lg font-semibold">등록 문제</h2>
      <ProblemsTable problems={problems} pageNum={pageNum} />
      <Pagenation pageNum={pageNum} maxPageNum={maxPageNum} />
    </section>
  );
}
