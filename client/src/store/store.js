import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from './reducer';

export const store = configureStore({
    reducer : {
        expense : expenseSlice
    }
})