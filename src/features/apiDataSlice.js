import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const apiDataSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        getData(state , action) {
            return state.data;
        },

        setData(state , action) {
            state.data = [...state.data , ...action.payload.data]
        }
    }
})

export default apiDataSlice.reducer;
export const {setData , getData} = apiDataSlice.actions;