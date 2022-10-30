import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({//combineReducers reducerları toplar 
    counterReducer
});

export default reducers;