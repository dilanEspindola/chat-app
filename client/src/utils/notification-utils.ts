import { toast, TypeOptions } from "react-toastify";

export const errorNotification = (message: string) => {
  toast.error(message, {
    position: "bottom-center",
    draggable: true,
    progress: undefined,
    autoClose: 5000,
    closeOnClick: true,
    theme: "colored",
    pauseOnHover: false,
  });
};
