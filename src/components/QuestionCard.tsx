"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function QuestionCard() {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader>
        <CardTitle className="text-base">
          수 합치기2 <button>{">"}</button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div>난이도 : HARD</div>
        <div>history : XXO</div>
        <div>시도 횟수 : 2</div>
        <div>최근 푼 날짜 : 2024.05.20</div>
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
