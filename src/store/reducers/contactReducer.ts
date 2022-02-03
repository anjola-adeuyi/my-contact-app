import { ADD_CONTACT } from "../actions/actionConstant";
import { ActionTypes } from "../actions/actionTypes";
import { Contact, Store } from "../types";

const initialState = {
  contacts: [
    {
      id: 0,
      name: "Raman sharma",
      number: 12344555,
      email: "raman@gmail.com"
    },
    {
      id: 1,
      name: "Jola Ade",
      number: 8366383,
      email: "jola@ade.com"
    }
  ]
}

// Standard interface and functions
const addContact = ( contacts: Contact[], name: string, email: string, number: number ): Contact[] => [ 
  ...contacts, { 
    id: Math.max(0, Math.max(...contacts.map(({ id }) => id))) + 1, name, email, number 
  }]

const contactReducer = (state: Store = initialState, action: ActionTypes ) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: addContact(state.contacts, action.payload.name, action.payload.email, action.payload.number )
      }
    default:
    return state;
  }
}

export default contactReducer;

export type RootState = ReturnType<typeof contactReducer>