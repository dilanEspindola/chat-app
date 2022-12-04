export interface User {
  id: number;
  fullname: string;
  username: string;
  photo: string;
}

export interface FormData {
  fullname: string;
  username: string;
  email: string;
  password: string;
  photo: File;
}

export type UserLogin = {
  email: string;
  password: string;
};
