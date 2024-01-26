import {configureStore} from '@reduxjs/toolkit';

import languageSlice from './slice';
import validationSlice from './validationOld';

export const store = configureStore({
    reducer: {
        language: languageSlice,
        validationAge: validationSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
