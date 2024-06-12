import { Difficulty } from "./common";

export type Problem = {
  name: string;
  type: string;
  difficulty: Difficulty;
  link: string;
  idea?: string;
  isSolved: boolean;
};
