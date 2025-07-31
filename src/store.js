import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createIdbStorage from 'redux-persist-indexeddb-storage';
import rootReducer from "./slices";

// Configure the persistence with IndexedDB
const persistConfig = {
  key: 'root',
  storage: createIdbStorage('live-re-wire-db'),
  whitelist: ['events'], // Only persist the events state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
