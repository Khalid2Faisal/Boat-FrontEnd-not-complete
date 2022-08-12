export interface PreRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  token: string;
  message: string;
  user: object;
}

export interface User {
  _id: string;
  name: string;
  username: string;
  about?: string;
}

export interface authState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
