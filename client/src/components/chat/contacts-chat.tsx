import { Link } from "react-router-dom";
import icon from "../../assets/icon.jpg";
import "./chat.css";

export const ContactsChat = () => {
  return (
    <div className="col-span-1 bg-black p-5 overflow-y-auto container-contacts-chat">
      <ul className="flex flex-col gap-16">
        <Link
          to=""
          className="flex items-center gap-5  p-2 hover:bg-gray-800 hover:rounded-md duration-200 transition-all ease-in-out"
        >
          <img src={icon} alt="" className="w-16 rounded-full" />
          <p className="text-white">contact name</p>
        </Link>
        <Link
          to=""
          className="flex items-center gap-5 p-2 hover:bg-gray-800 hover:rounded-md duration-200 transition-all ease-in-out"
        >
          <img src={icon} alt="" className="w-16 rounded-full" />
          <p className="text-white">contact name</p>
        </Link>
        <Link
          to=""
          className="flex items-center gap-5  p-2 hover:bg-gray-800 hover:rounded-md duration-200 transition-all ease-in-out"
        >
          <img src={icon} alt="" className="w-16 rounded-full" />
          <p className="text-white">contact name</p>
        </Link>
        <Link
          to=""
          className="flex items-center gap-5  p-2 hover:bg-gray-800 hover:rounded-md duration-200 transition-all ease-in-out"
        >
          <img src={icon} alt="" className="w-16 rounded-full" />
          <p className="text-white">contact name</p>
        </Link>
        <Link
          to=""
          className="flex items-center gap-5  p-2 hover:bg-gray-800 hover:rounded-md duration-200 transition-all ease-in-out"
        >
          <img src={icon} alt="" className="w-16 rounded-full" />
          <p className="text-white">contact name</p>
        </Link>
      </ul>
    </div>
  );
};
