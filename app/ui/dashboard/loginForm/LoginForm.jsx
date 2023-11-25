"use client";
import { authenticate } from "@/app/lib/action.js";
import { useState } from "react";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const [err, setErr] = useState(null);

  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    router.push("/dashboard");
    data?.error && setErr(data.error);
  };

  return (
    <form
      action={handleLogin}
      className="bg-clrBgSoft p-11 rounded-lg w-[400px] h-[400px] flex flex-col justify-center gap-6"
    >
      <input
        type="text"
        placeholder="username"
        name="username"
        className="w-full p-6 border-2 border-clrBg-2 rounded-lg bg-bgGradient-1 text-clrText outline-none"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="w-full p-6 border-2 border-clrBg-2 rounded-lg bg-bgGradient-1 text-clrText outline-none"
      />
      <button className="w-full p-4 bg-teal-500 text-clrText border-none cursor-pointer outline-none">
        Login
      </button>
      {err && err ? <p className="text-red-600">{err}</p> : ""}
    </form>
  );
};

export default LoginForm;
