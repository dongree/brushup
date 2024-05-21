"use client";

export default function QuestionCard() {
  return (
    <section className="flex h-48 w-48 flex-col items-center justify-between rounded-lg border-[1px] border-black bg-white py-1 text-sm">
      <button className="w-full border-b-[1px] border-black">
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
