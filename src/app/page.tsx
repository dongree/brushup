import QuestionCard from "@/components/QuestionCard";
import { getMyProblem } from "@/service/problem";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const key = "next-auth.session-token";
  const cookie = cookies().toString();
  const hasSesstionToken = !!cookie.includes(key);

  const problems = hasSesstionToken ? await getMyProblem(cookie, 1) : [];

  return hasSesstionToken ? (
    problems.length === 0 ? (
      <main className="mt-52 flex flex-col items-center">
        <div className="text-[100px]">😅</div>
        <p className="text-3xl font-semibold">
          오늘은 brush up할 문제가 없어요...
        </p>
      </main>
    ) : (
      <main className="flex flex-col items-center justify-between">
        <h3 className="my-8 text-2xl font-medium">오늘의 Brush Up 문제</h3>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {problems.map((p) => (
            <QuestionCard key={p.id} problem={p} />
          ))}
        </section>
      </main>
    )
  ) : (
    <main className="mt-52 flex flex-col items-center gap-3">
      <p className="text-3xl font-semibold">
        오늘은 어떤 알고리즘 문제를 복습할 지 고민하지 않으셨나요?
      </p>
      <p className="text-3xl font-semibold">
        Brush Up에서 기억하고 싶은 알고리즘 문제를 등록해보세요!
      </p>
      <p className="text-3xl font-semibold">
        문제를 등록하면 일정 주기마다 오늘의 Brush Up 문제를 알려드려요!
      </p>
      <Button size={"lg"}>
        <Link href={"auth/login"}>로그인</Link>
      </Button>
    </main>
  );
}
