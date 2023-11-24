"use client";
import { authenticate } from "@/app/lib/action.js";
import { useFormState } from "react-dom";
const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <form
      action={formAction}
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
      {state && state ? <p className="text-red-600">{state}</p> : ""}
    </form>
  );
};

export default LoginForm;
