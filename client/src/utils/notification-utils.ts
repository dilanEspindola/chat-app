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

export const loadingNofication = () => {
  return toast.loading("loading...", {
    position: "bottom-center",
  });
};

export const successNotification = (message: string) => {
  toast.success(message, {
    position: "bottom-center",
    draggable: true,
    progress: undefined,
    autoClose: 5000,
    closeOnClick: true,
    theme: "colored",
    pauseOnHover: false,
    isLoading: false,
  });
};

export const updateNotification = (
  loadingState: any,
  message: string,
  type: TypeOptions
) => {
  toast.update(loadingState, {
    render: message,
    type,
    isLoading: false,
    theme: "colored",
    position: "top-right",
    draggable: true,
    progress: undefined,
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: false,
  });
};
