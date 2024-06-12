"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ProblemRes } from "@/types/problem";

type Props = {
  problem: ProblemRes;
};

export default function QuestionCard({ problem }: Props) {
  const {
    name,
    type,
    difficulty,
    idea,
    link,
    recentlySolvedAt,
    solvingHistory,
  } = problem;

  return (
    <Card className="flex flex-col items-center">
      <CardHeader>
        <CardTitle className="text-base">
          {name}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {">"}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div>{`난이도 : ${difficulty}`}</div>
        <div>{`history : ${solvingHistory}`}</div>
        <div>{`최근 푼 날짜 : ${recentlySolvedAt.slice(0, 10)}`}</div>
        <div>Hint 보기</div>
      </CardContent>
      <CardFooter className="gap-1">
        <Button>해결</Button>
        <Button>살패</Button>
        <Button>나중에</Button>
      </CardFooter>
    </Card>
  );
}
