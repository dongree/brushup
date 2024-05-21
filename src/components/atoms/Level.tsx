import { Difficulty } from "@/types/common";

type Props = {
  difficulty: Difficulty;
  selectedValue: Difficulty;
  onClick: () => void;
};

export default function Level({ difficulty, selectedValue, onClick }: Props) {
  return (
    <button
      className={`text-sm ${
        selectedValue === difficulty ? "text-red-500" : "text-black"
      }`}
      onClick={onClick}
    >
      {difficulty}
    </button>
  );
}
