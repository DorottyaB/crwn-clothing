import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const categoriesArray = await getCategoriesAndDocuments();
  return categoriesArray;
});

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};

export interface CategoriesState {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, (state, _action) => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        return { ...state, categories: action.payload, isLoading: false };
      })
      .addCase(fetchCategories.rejected, (state, action: PayloadAction<any>) => {
        return { ...state, error: action.payload, isLoading: true };
      });
  },
});

// export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
