import QuestionCard from "@/components/QuestionCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-32px flex flex-col items-center justify-between">
      <h3 className="my-8 text-2xl font-medium">오늘의 Brush Up 문제</h3>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </section>
    </main>
  );
}
