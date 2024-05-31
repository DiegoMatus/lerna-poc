import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchDataForEpic } from '../networking/test';
import { RootState } from '../../../redux/generalConfig';
import { TestDTO } from '../dtos/testdto';


//TODO LO QUE ESTA EN ESTE ARCHIVO DEBE SEPARARSE

export const fetchData = createAsyncThunk<TestDTO>('data/fetchData', async () => {
  return fetchDataForEpic() 
});

interface DataState {
  data: TestDTO | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'test-epic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<TestDTO>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});


// Selectors
export const selectData = (state: RootState) => state.data.data;
export const selectLoading = (state: RootState) => state.data.loading;
export const selectError = (state: RootState) => state.data.error;

export default dataSlice.reducer;