import React from "react";

interface IUser {
  role: string;
}
export interface IAuth {
  isAuth: boolean;
  isLoading: boolean;
  user: null;
}
export interface ICheckAuth {
  isAuthenticated: boolean;
  user: IUser;
  children: React.ReactNode;
}
