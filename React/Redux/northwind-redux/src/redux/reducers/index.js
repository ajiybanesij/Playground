import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";

//Başka reducer gelirse buranın içine ekliycez
const rootReducer = combineReducers({
  changeCategoryReducer,
});

export default rootReducer; 