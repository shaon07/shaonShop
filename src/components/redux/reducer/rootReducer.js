import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import cataReducer from "./cataReducer";
import storeReducer from "./storeReducer";

const rootReducer = combineReducers({ storeReducer, cataReducer, cartReducer });
export default rootReducer;
