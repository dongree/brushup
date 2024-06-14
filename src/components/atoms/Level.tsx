import { Difficulty } from "@/types/common";

type Props = {
  difficulty: Difficulty;
  selectedValue: Difficulty;
  onClick: () => void;
};

export default function Level({ difficulty, selectedValue, onClick }: Props) {
  return (
    <div
      className={`cursor-pointer rounded-md px-2 py-1 text-sm ${
        selectedValue === difficulty
          ? " bg-gray-800 font-medium text-white"
          : "text-black"
      }`}
      onClick={onClick}
    >
      {difficulty}
    </div>
  );
}
