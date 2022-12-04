import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiFillLock } from "react-icons/all";
import { ToastContainer } from "react-toastify";
import { UserLogin } from "@/interfaces";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "@/routes";
import { useAuth } from "@/hooks";

interface StatesBehavior {
  iconPassword: boolean;
  iconUser: boolean;
}

interface States {
  statesBehavior: StatesBehavior;
}

const Login = () => {
  const [isActive, setisActive] = useState<States["statesBehavior"]>({
    iconPassword: false,
    iconUser: false,
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>();
  const { login } = useAuth();

  const onSubmit = async (data: UserLogin) => {
    const info = await login(data);
    info?.auth && navigate(`/${PRIVATE_ROUTES.HOME}`, { replace: true });
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen
    bg-gradient-to-r from-[#25c1c7] to-[#920FC7]"
    >
      <div className="bg-white p-3 w-4/12 pt-16 pb-8 px-10 rounded-lg">
        <h1 className="text-center text-3xl pb-10">Welcome back</h1>
        <form
          action=""
          className="flex flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="capitalize">
              email
            </label>
            <div className="w-full relative text-slate-500">
              <AiOutlineUser
                className={`absolute top-[20%] left-2 text-xl
               ${isActive.iconUser ? "text-purple-600" : "text-slate-500"}`}
              />
              <input
                type="text"
                className="outline-none border-b-[1px] border-b-slate-400 py-2 pl-10 w-full
                focus:border-b-purple-600 focus:border-b-2 placeholder:text-slate-400 text-black"
                placeholder="Type your email"
                {...register("email", { required: true })}
                onFocus={() => setisActive({ ...isActive, iconUser: true })}
                onBlur={() => setisActive({ ...isActive, iconUser: false })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="capitalize">
              password
            </label>
            <div className="w-full relative text-slate-500">
              <AiFillLock
                className={`absolute top-[20%] left-2 text-xl
               ${isActive.iconPassword ? "text-purple-600" : "text-slate-500"}`}
              />
              <input
                type="password"
                className="outline-none border-b-[1px] border-b-slate-400 py-2 pl-10 w-full
                focus:border-b-purple-600 focus:border-b-2 placeholder:text-slate-400 text-black"
                placeholder="Type your username"
                {...register("password", { required: true })}
                onFocus={() => setisActive({ ...isActive, iconPassword: true })}
                onBlur={() => setisActive({ ...isActive, iconPassword: false })}
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
          </div>
          <button
            className="bg-gradient-to-r from-purple-700 to-cyan-300 p-2 text-white uppercase text-lg
          rounded-full mb-6 shadow-lg hover:from-purple-700 hover:to-purple-700"
          >
            login
          </button>
        </form>
        <Link
          className="text-slate-500 cursor-pointer"
          to={`/${PUBLIC_ROUTES.REGISTER}`}
        >
          Don't you have an account?
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
