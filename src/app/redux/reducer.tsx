import { createReducer, createAction } from '@reduxjs/toolkit';

const initState = {
  language: "fr",
};

// Création d'une action typée
export const updateLanguage = createAction<string>('UPDATE_LANGUAGE');

const reducer = createReducer(initState, (builder) => {
    builder.addCase(updateLanguage, (state, action) => {
        // Ici, action.payload est de type string
        state.language = action.payload;
    });
});

export default reducer;