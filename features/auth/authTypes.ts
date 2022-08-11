export interface PreRegisterData {
  name: string;
  email: string;
  password: string;
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
