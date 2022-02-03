import { Contact, Store } from "../types";

const initialState = {
  contacts: [
    {
      id: 0,
      name: "Raman sharma",
      number: 12344555,
    },
    {
      id: 1,
      name: "Jola Ade",
      number: 098366383,
    }
  ]
}

const contactReducer = (state: Store = initialState, action) => {
  switch (action.type) {
    default:
    return state;
  }
}

export default contactReducer;