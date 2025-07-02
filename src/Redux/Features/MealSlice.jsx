
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchMealsBySearch = createAsyncThunk(
  'meals/fetchBySearch', async (searchItem) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`
    );
    console.log("data" , res);
    return res.data.meals;
  }
);
console.log("fetchMealsBySearch",fetchMealsBySearch);


export const fetchRandomMeal = createAsyncThunk(
  'meals/fetchRandom',
  async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    console.log("data" , res);
    return res.data.meals;
  }
);
console.log("fetchRandomMeal",fetchRandomMeal);
export const fetchMealsByIngredients = createAsyncThunk('meals/fetchByIngredients', async (ingredients) => {
    const query = ingredients.join(','); 
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
    );
    console.log("data" , res);
    return res.data.meals;
  }
);
console.log("fetchMealsByIngredients",fetchMealsByIngredients);
const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    meals: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearMeals: (state) => {
      state.meals = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchMealsBySearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMealsBySearch.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload;
      })
      .addCase(fetchMealsBySearch.rejected, (state,  action) => {
        state.loading = false;
        
      })

  
      .addCase(fetchRandomMeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomMeal.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload;
      })
      .addCase(fetchRandomMeal.rejected, (state, action) => {
        state.loading = false;
        
      })

     
      .addCase(fetchMealsByIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMealsByIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.meals = action.payload;
      })
      .addCase(fetchMealsByIngredients.rejected, (state, action) => {
        state.loading = false;
        
      });
  },
});

export const { clearMeals } = mealsSlice.actions;
export default mealsSlice.reducer;
