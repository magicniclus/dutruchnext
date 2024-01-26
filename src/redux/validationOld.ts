import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Définition de l'état et de l'interface
export interface ValidationState {
    isValid: boolean;
}

// État initial
const initialState: ValidationState = {
    isValid: false, // Valeur initiale
};

// Création du slice
export const validationSlice = createSlice({
    name: 'validation',
    initialState,
    reducers: {
        // Reducer pour mettre à jour l'état
        setValidation: (state, action: PayloadAction<boolean>) => {
            state.isValid = action.payload;
        }
    }
});

// Exportation de l'action et du reducer
export const { setValidation } = validationSlice.actions;
export default validationSlice.reducer;