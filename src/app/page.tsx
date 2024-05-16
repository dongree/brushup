import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
      <p>오늘의 Brush Up 문제</p>
      <section className="flex gap-2">
        <div className="h-40 w-40 bg-red-200">dd</div>
        <div className="h-40 w-40 bg-red-200">dd</div>
        <div className="h-40 w-40 bg-red-200">dd</div>
        <div className="h-40 w-40 bg-red-200">dd</div>
      </section>
    </main>
  );
}
