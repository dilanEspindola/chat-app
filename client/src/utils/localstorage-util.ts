import { UserLoggedResponse } from "@/interfaces";

const KEYS = {
  USER: "user",
  TOKEN: "token",
};

export const saveUserInfo = (userData: UserLoggedResponse) => {
  const { token, ...user } = userData;
  localStorage.setItem(KEYS["USER"], JSON.stringify(user));
  localStorage.setItem(KEYS["TOKEN"], JSON.stringify(token));
};

export const getToken = (): string | null => {
  if (!localStorage.getItem(KEYS["TOKEN"])) return null;

  const user = JSON.parse(localStorage.getItem(KEYS["TOKEN"])!);
  return user;
};
