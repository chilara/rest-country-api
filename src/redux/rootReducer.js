import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { countryReducer } from "./country/reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  countryReducer,
});

export default persistReducer(persistConfig, rootReducer);
