import { createStore } from "redux"
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./rootReducer"

const persistConfig = {
  key: 'TODO',
  storage,
  whitelist: ['todos', 'currentIndex']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
export const persistor = persistStore(store)
export default store
