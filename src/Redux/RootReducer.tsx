import {combineReducers} from "redux";
import ContactSlice from "./Slices/ContactSlice";
import AppSlice from "./Slices/AppSlice";

const rootReducer = combineReducers({
    app: AppSlice,
    contact: ContactSlice
})
export default rootReducer;