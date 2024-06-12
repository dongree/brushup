import { Problem } from "@/types/problem";

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
