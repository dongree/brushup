import CreateForm from "@/components/organisms/CreateForm";

export default function CreatePage() {
  return (
    <section className="flex flex-col items-center">
      <p className="text-2xl">복습 문제 등록 페이지</p>
      <CreateForm />
    </section>
  );
}
