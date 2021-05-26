import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./slices/itemsSlice";

export default configureStore({
    reducer: {
        items:itemsSlice
    }
})