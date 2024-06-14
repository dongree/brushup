import CreateForm from "@/components/organisms/CreateForm";

export default function CreatePage() {
  return (
    <section className="flex flex-col items-center">
      <p className="my-8 text-2xl font-semibold">Brush up 문제 등록</p>
      <CreateForm />
    </section>
  );
}
