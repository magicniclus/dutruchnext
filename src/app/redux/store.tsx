import { configureStore } from '@reduxjs/toolkit';

// Importez vos reducers ici
import rootReducer from './reducer';

export const store = configureStore({
  reducer: rootReducer,
});

// Typage pour l'utilisation avec TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
