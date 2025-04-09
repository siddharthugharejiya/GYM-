import { legacy_createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"; 
import { SignUp_reducer } from "./reducer";

export const store = legacy_createStore(SignUp_reducer, applyMiddleware(thunk));
