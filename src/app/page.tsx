import QuestionCard from "@/components/QuestionCard";
import { getMyProblem } from "@/service/problem";
import { cookies } from "next/headers";

export default async function Home() {
  const key = "next-auth.session-token";
  const cookie = cookies().toString();
  const hasSesstionToken = !!cookie.includes(key);

  const problems = hasSesstionToken ? await getMyProblem(cookie) : [];

  return hasSesstionToken ? (
    <main className="mt-32px flex flex-col items-center justify-between">
      <h3 className="my-8 text-2xl font-medium">오늘의 Brush Up 문제</h3>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {problems.map((p) => (
          <QuestionCard key={p.id} problem={p} />
        ))}
      </section>
    </main>
  ) : (
    <div>login 해주세요...</div>
  );
}
