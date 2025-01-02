import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: true,
    error: {},
    likes: []
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
        },

        setLikes(state , action) {
            state.likes.push(action.payload.likes);
        },

        removeLike(state , action) {
            state.likes = state.likes.filter((element) => {
                return element != action.payload.likes;
            })
        }
    }
})

export default apiDataSlice.reducer;
export const {setData , getData , setLikes , removeLike} = apiDataSlice.actions;