import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./slices/itemsSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
    reducer: {
        items: itemsSlice,
        user: userSlice
    }
})