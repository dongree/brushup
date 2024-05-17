'use client';

export default function QuestionCard() {
  return (
    <section className="flex flex-col items-center justify-between h-48 w-48 bg-white py-1 rounded-lg border-[1px] border-black text-sm">
      <button className="border-b-[1px] border-black w-full">
        문제 보러 가기
      </button>
      <div>XXO</div>
      <div>난이도 : HARD</div>
      <div>푼 횟수 : 2</div>
      <div>Hint 보기</div>
      <div className="flex w-full justify-around border-t-[1px] border-black">
        <button>해결</button>
        <button>살패</button>
        <button>나중에</button>
      </div>
    </section>
  );
}
