import { Problem, ProblemRes } from "@/types/problem";

export async function getMyProblem(cookie: string): Promise<ProblemRes[]> {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/problem`, {
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
