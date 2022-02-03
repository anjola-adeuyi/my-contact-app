import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactReducer from "./reducers/contactReducer";
import thunk from "redux-thunk"

const store = createStore(contactReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;