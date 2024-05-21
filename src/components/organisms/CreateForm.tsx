"use client";

import Label from "@/components/atoms/Label";
import Level from "@/components/atoms/Level";
import { Difficulty } from "@/types/common";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";

export default function CreateForm() {
  const [link, setLink] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [difficulty, setDifficulty] = useState<Difficulty>("HARD");
  const [idea, setIdea] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(link, type, difficulty, idea);
  };

  return (
    <form className="my-1 flex w-[350px] flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <Label text="Link" htmlFor="link" />
        <input
          className="border-2"
          type="url"
          id="link"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <Label text="유형" htmlFor="type" />
        <input
          className="border-2"
          type="text"
          id="type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div className="my-3 flex flex-col">
        <Label text="난이도" />
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
      </div>

      <div className="my-3 flex flex-col">
        <Label text="Idea" htmlFor="idea" />
        <textarea
          className="border-2"
          id="idea"
          name="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="문제 풀이 아이디어를 입력해주세요."
        />
      </div>
      <Button>제출</Button>
    </form>
  );
}
