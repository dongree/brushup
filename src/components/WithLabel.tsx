import { Label } from "@/components/ui/label";

type Props = {
  children: React.ReactNode;
  name: string;
  htmlFor?: string;
};

export default function WithLabel({ children, name, htmlFor }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{name}</Label>
      {children}
    </div>
  );
}
