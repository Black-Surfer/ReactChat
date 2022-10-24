import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync'
import chat from "../reducers/index";

const initialState = {};
const persistConfig = {
  key: "root",
  storage,
};

const middlewares = [
  createStateSyncMiddleware(persistConfig),
]

const persistedReducer = persistReducer(persistConfig, chat);

export default function presist() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  initStateWithPrevTab(store)
  let persistor = persistStore(store);
  return { store, persistor };
}
