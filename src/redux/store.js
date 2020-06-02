import { createStore } from "redux";
import loginReducer from "./reducer.js";

export default createStore(loginReducer);