import { ADD_CONTACT } from "./actionConstant";
import { ActionTypes } from "./actionTypes";

export const addContact = ( name: string, number: number, email: string ): ActionTypes => ({
  type: ADD_CONTACT, 
  payload: {
    name,
    number,
    email
  }
})