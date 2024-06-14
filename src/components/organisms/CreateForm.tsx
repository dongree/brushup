"use client";

import Level from "@/components/atoms/Level";
import { Difficulty } from "@/types/common";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { createProblem } from "@/service/problem";
import { Problem } from "@/types/problem";
import { useRouter } from "next/navigation";
import WithLabel from "@/components/WithLabel";

export default function CreateForm() {
  const [name, setName] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [difficulty, setDifficulty] = useState<Difficulty>("HARD");
  const [idea, setIdea] = useState<string>("");
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const problemData: Problem = {
      name,
      type,
      difficulty,
      link,
      idea,
      isSolved,
    };

    createProblem(problemData).then(() => {
      router.push("/");
      router.refresh();
    });
    console.log(link, type, difficulty, idea, isSolved);
  };

  return (
    <form
      className="my-1 flex w-[350px] flex-col gap-5"
      onSubmit={handleSubmit}
    >
      <WithLabel name="Name" htmlFor="name">
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </WithLabel>
      <WithLabel name="Link" htmlFor="link">
        <Input
          type="url"
          id="link"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </WithLabel>
      <WithLabel name="유형" htmlFor="type">
        <Input
          type="text"
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </WithLabel>
      <WithLabel name="난이도">
        <div className="flex gap-2">
          <Level
            difficulty="HARD"
            selectedValue={difficulty}
            onClick={() => setDifficulty("HARD")}
          />
          <Level
            difficulty="MEDIUM"
            selectedValue={difficulty}
            onClick={() => setDifficulty("MEDIUM")}
          />
          <Level
            difficulty="EASY"
            selectedValue={difficulty}
            onClick={() => setDifficulty("EASY")}
          />
        </div>
      </WithLabel>

      <WithLabel name="Idea" htmlFor="idea">
        <Textarea
          id="idea"
          name="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="문제 풀이 아이디어를 입력해주세요."
        />
      </WithLabel>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="solved"
          checked={isSolved}
          onClick={() => setIsSolved(!isSolved)}
        />
        <label htmlFor="solved" className="text-sm font-medium ">
          Did you solved?
        </label>
      </div>
      <Button>등록</Button>
    </form>
  );
}
