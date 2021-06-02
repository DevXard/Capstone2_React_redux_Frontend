import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./slices/itemsSlice";
import userSlice from "./slices/userSlice";
import ordersSlice from "./slices/ordersSlice";

export default configureStore({
    reducer: {
        items: itemsSlice,
        user: userSlice,
        orders: ordersSlice
    }
})