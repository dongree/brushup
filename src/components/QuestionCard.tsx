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
import { resolve, skip } from "@/service/problem";
import getYMD from "@/utils/time";
import { useState } from "react";

type Props = {
  problem: ProblemRes;
};

export default function QuestionCard({ problem }: Props) {
  const {
    id,
    name,
    type,
    difficulty,
    idea,
    link,
    recentlySolvedAt,
    solvingHistory,
  } = problem;

  const [isReverse, setIsReverse] = useState(false);

  return !isReverse ? (
    <Card className="flex h-[250px] w-[250px] flex-col">
      <CardHeader>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="self-end text-xs font-light text-gray-600"
        >
          {"문제 풀러 가기"}
        </a>
        <CardTitle className="text-lg">
          <p>{name}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col">
        <p>{`History : ${solvingHistory}`}</p>
        <p>{`최근 풀이 날짜 : ${getYMD(recentlySolvedAt)}`}</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="mb-2 flex w-full justify-between text-xs text-gray-600">
          <button className="text-gray-800" onClick={() => setIsReverse(true)}>
            Hint 보기
          </button>
          <button onClick={() => skip(id)}>Skip</button>
        </div>

        <div className="flex w-full gap-2">
          <Button
            size="sm"
            className="w-full"
            onClick={() => resolve(id, true)}
          >
            해결
          </Button>
          <Button
            size="sm"
            className="w-full"
            onClick={() => resolve(id, false)}
          >
            살패
          </Button>
        </div>
      </CardFooter>
    </Card>
  ) : (
    <Card className="flex h-[250px] w-[250px] flex-col">
      <CardHeader>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="self-end text-xs font-light text-gray-600"
        >
          {"문제 풀러 가기"}
        </a>
        <CardTitle className="text-lg">
          <p>{`난이도 : ${difficulty}`}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col overflow-y-auto">
        <p className="">
          {idea.length === 0
            ? "풀이 idea를 작성하지 않으셨습니다."
            : `Idea : ${idea}`}
        </p>
      </CardContent>
      <CardFooter className="flex  flex-col">
        <Button
          size="sm"
          className="w-full"
          onClick={() => setIsReverse(false)}
        >
          뒤집기
        </Button>
      </CardFooter>
    </Card>
  );
}
