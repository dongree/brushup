import { User } from "@/types/user";

export async function getUserById(id: string) {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/user?id=${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("error");
      return res.json();
    })
    .catch(console.error);
}

export async function addUser(user: User) {
  return fetch(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (!res.ok) throw new Error("error");
      return res.json();
    })
    .catch(console.error);
}
