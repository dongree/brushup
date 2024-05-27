// TODO : Data Table UI 보고 구성하기

import ProblemsTable from "@/components/organisms/ProblemsTable";

export default function MePage() {
  return (
    <section className="mt-8 flex flex-col items-center">
      <h2 className="my-8 text-lg font-semibold">등록 문제</h2>
      <ProblemsTable />
    </section>
  );
}
