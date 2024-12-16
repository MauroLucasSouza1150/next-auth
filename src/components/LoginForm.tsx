"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchparams = useSearchParams();

  const error = searchparams.get("error");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <form
      onSubmit={login}
      className="bg-zinc-300 p-12 rounded-lg w-96 max-w-full flex flex-col justify-center items-center gap-3"
    >
      <h2 className="text-xl font-bold text-slate-800 py-2">Faça seu Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Digite seu E-mail"
        className="input input-primary text-white w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Digite sua Senha"
        className="input input-primary text-white w-full"
      />
      <button type="submit" className="btn btn-primary w-full font-bold">
        Login
      </button>
      {error === "CredentialsSignin" && (
        <div className="text-red-500 font-bold">Error no Login</div>
      )}
    </form>
  );
}
