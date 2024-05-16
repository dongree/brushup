export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 bg-sky-300 h-16">
      <h1>Brush Up</h1>
      <div className="flex gap-5">
        <div>입력</div>
        <button>로그인</button>
      </div>
    </header>
  );
}
