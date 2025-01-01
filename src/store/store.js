import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/apiDataSlice";

const store = configureStore({
    reducer: {
        api: reducer
    }
})

export default store;