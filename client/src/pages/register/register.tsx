import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImUpload2 } from "react-icons/all";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { useImageSize } from "react-image-size";
import { errorNotification } from "@/utils/";
import { FormData } from "@/interfaces";
import { registerUser } from "@/services/";

const Register = () => {
  const [showFile, setShowFile] = useState<any>();
  const [file, setFile] = useState<FileList | null>();
  const [isDisabled, setisDisabled] = useState<boolean>(false);
  const [data] = useImageSize(showFile && showFile);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleFile = (evt: ChangeEvent<HTMLInputElement>) => {
    const img = evt.target.files;
    if (img?.length !== 0) {
      setFile(img);
      console.log(img);

      setShowFile(URL.createObjectURL(img![0]));
    }
  };

  const onSubmit = async (dataInfo: FormData) => {
    const data = { ...dataInfo, photo: file![0] };
    await registerUser(data);
  };

  useEffect(() => {
    if (data && (data.width > 850 || data.height > 850)) {
      errorNotification("image too large");
      setisDisabled(true);
    }

    if (data && (data.width < 850 || data.height < 850)) setisDisabled(false);
  }, [data]);

  return (
    <div
      className="w-full flex items-center justify-center h-screen
    bg-gradient-to-b from-[#170233] to-[#250470]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white py-10 px-16 rounded-3xl sm:w-12/12 md:w-8/12 lg:w-10/12"
      >
        <div className="mb-5">
          <h3 className="font-bold text-3xl mb-1 text-slate-700">Register</h3>
          <Link to="">Already have an account?</Link>
        </div>
        <div className="flex justify-between gap-10">
          <div className="flex items-center basis-[50%] flex-wrap">
            <label htmlFor="" className="w-[20%]">
              Fullname:
            </label>
            <input
              type="text"
              placeholder="type your fullname"
              className="border-2 p-2 w-full rounded-md focus:outline-purple-500"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-red-600 w-full">fullname is required</span>
            )}
          </div>
          <div className="flex items-center basis-[50%] flex-wrap">
            <label htmlFor="" className="w-[20%]">
              Username:
            </label>
            <input
              type="text"
              placeholder="type your username"
              className="border-2 p-2 w-full rounded-md focus:outline-purple-500"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-600 w-full">username is required</span>
            )}
          </div>
        </div>
        <div className="flex justify-between w-full gap-10 mt-10">
          <div className="flex items-center basis-[50%] flex-wrap">
            <label htmlFor="" className="w-[20%]">
              Email:
            </label>
            <input
              type="email"
              placeholder="type your email"
              className="border-2 p-2 rounded-md focus:outline-purple-500
              w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600 w-full">email is required</span>
            )}
          </div>
          <div className="flex items-center basis-[50%] flex-wrap">
            <label htmlFor="" className="w-[20%]">
              Password:
            </label>
            <input
              type="password"
              placeholder="type your password"
              className="border-2 p-2 w-full rounded-md focus:outline-purple-500"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-600 w-full">password is required</span>
            )}
          </div>
        </div>
        <div className="mt-5 flex justify-between items-center w-[60%]">
          <label htmlFor="file" className="flex items-center gap-5">
            Profile photo
            <span>
              <ImUpload2 className="text-6xl" />
            </span>
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            {...register("photo", { required: true })}
            onChange={handleFile}
          />
          {errors.photo && (
            <span className="text-red-600 w-full">photo is required</span>
          )}
          {showFile ? (
            <img src={showFile} className="w-[300px] ml-16" />
          ) : (
            <p className="mr-20 text-lg uppercase">not file selected</p>
          )}
        </div>
        <button
          className={`bg-[#0a9c58] w-2/12 self-start
         text-white p-2 mt-5 rounded-md hover:bg-[#048549]`}
          disabled={isDisabled ? true : false}
        >
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
