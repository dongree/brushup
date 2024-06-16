import { PROBLEM_COUNT_PER_PAGE } from "@/constants/limit";
import { Problem, ProblemRes } from "@/types/problem";

export async function getMyProblem(
  cookie: string,
  pageNum: number,
  pageCount: number = PROBLEM_COUNT_PER_PAGE,
): Promise<ProblemRes[]> {
  return fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/problem?pageNum=${pageNum}&pageCount=${pageCount}`,
    {
      headers: {
        Cookie: `${cookie}`,
      },
    },
  )
    .then(async (res) => {
      if (!res.ok) throw new Error("error");

      return res.json();
    })
    .catch(console.error);
}

export async function getMyProblemCount(cookie: string): Promise<number> {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/problem/count`, {
    headers: {
      Cookie: `${cookie}`,
    },
  })
    .then(async (res) => {
      if (!res.ok) throw new Error("error");

      return res.json();
    })
    .catch(console.error);
}

export async function getTodayProblem(cookie: string): Promise<ProblemRes[]> {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/problem/today`, {
    headers: {
      Cookie: `${cookie}`,
    },
  })
    .then(async (res) => {
      if (!res.ok) throw new Error("error");

      return res.json();
    })
    .catch(console.error);
}

export async function createProblem(problem: Problem) {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/problem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(problem),
  })
    .then((res) => res.json())
    .catch(console.error);
}

export async function resolve(id: number, isSolve: boolean) {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/problem/resolve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ id, isSolve }),
  })
    .then((res) => res.json())
    .catch(console.error);
}

export async function skip(id: number) {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/problem/skip`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ id }),
  })
    .then((res) => res.json())
    .catch(console.error);
}
