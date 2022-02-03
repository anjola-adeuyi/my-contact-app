import { ADD_CONTACT } from "./actionConstant";

export type ActionTypes = 
  | { type: typeof ADD_CONTACT; payload: {
    name: string;
    number: number;
    email: string
  } }