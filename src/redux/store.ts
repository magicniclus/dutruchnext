import {configureStore} from '@reduxjs/toolkit';

import languageSlice from './slice';

export const store = configureStore({
    reducer: {
        language: languageSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
