import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: true,
    error: {}
}

const apiDataSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        setData(state , action) {
            if(action.payload.data) {
                state.data = [...action.payload.data];
            }
            state.isLoading = action.payload.isLoading;
            state.error = action.payload.error;
        }
    }
})

export default apiDataSlice.reducer;
export const {setData , getData} = apiDataSlice.actions;