/* Defining the types of the data that will be used in the reducer. */
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
  email?: string;
  about?: string;
  hasimage: boolean;
}

// Defining the shape of the auth state.
export interface authState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
