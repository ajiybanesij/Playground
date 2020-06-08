import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from './changeCategoryReducer';
//Başka reducer gelirse buranın içine ekliycez
const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer
});

export default rootReducer; 