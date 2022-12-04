import { User } from "./";

export interface UserLoggedResponse {
  token: string;
  user: User;
  auth: boolean;
}
