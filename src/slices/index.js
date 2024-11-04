import { combineReducers } from "redux";
import aesReducer from "./ArtistEvents.slice";

const rootReducer = combineReducers({
  aes: aesReducer,
});

export default rootReducer;
