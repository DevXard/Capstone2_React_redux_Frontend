import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../api';

export const registerOrder = createAsyncThunk(
    `orders/registerOrder`,
    async (data, order) => {
        const res = await API.createOrder(data)
        return res
    }

)

const initialState = {
    orders: {}
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{

    },
    extraReducers: {

    }
})

export const ordersSelector = (state) => state.orders;

export default ordersSlice.reducer;