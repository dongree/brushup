import QuestionCard from '@/components/QuestionCard';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between mt-[5%]">
      <h3 className="font-medium text-2xl my-8">오늘의 Brush Up 문제</h3>
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
