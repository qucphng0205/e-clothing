import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

const middleWares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);
export default store;

