import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slice } from '@reduxjs/toolkit/src/createSlice';

export interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
    language: "fr", // Langue initiale
};

export const languageSlice: Slice<LanguageState> = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        }
    }
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
