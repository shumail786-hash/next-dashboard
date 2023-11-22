const LoginPage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form
        action=""
        className="bg-clrBgSoft p-11 rounded-lg w-[400px] h-[400px] flex flex-col justify-center gap-6"
      >
        <input
          type="text"
          placeholder="username"
          className="w-full p-6 border-2 border-clrBg-2 rounded-lg bg-bgGradient-1 text-clrText outline-none"
        />
        <input
          type="password"
          placeholder="password"
          className="w-full p-6 border-2 border-clrBg-2 rounded-lg bg-bgGradient-1 text-clrText outline-none"
        />
        <button className="w-full p-4 bg-teal-500 text-clrText border-none cursor-pointer outline-none">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
