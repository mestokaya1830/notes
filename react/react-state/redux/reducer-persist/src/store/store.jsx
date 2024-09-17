import { legacy_createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine
import rootReducer from './authReducer.jsx'; // Import your root reducer
const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['user'], // In this example, we persist the 'user' reducer
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = legacy_createStore(persistedReducer);
export const persistor = persistStore(store);