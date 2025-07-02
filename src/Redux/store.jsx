import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './Features/MealSlice';

export const store = configureStore({
    reducer: {
        meals: mealsReducer,
    },
});
