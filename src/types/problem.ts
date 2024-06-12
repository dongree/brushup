import { Difficulty } from "./common";

export type Problem = {
  name: string;
  type: string;
  difficulty: Difficulty;
  link: string;
  idea?: string;
  isSolved: boolean;
};

export type ProblemRes = {
  id: number;
  name: string;
  type: string;
  difficulty: string;
  idea: string;
  link: string;
  createdAt: string;
  recentlySolvedAt: string;
  solvingHistory: string;
  userid: string;
};
