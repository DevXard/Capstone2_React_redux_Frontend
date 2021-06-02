import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../api';

export const registerOrder = createAsyncThunk(
    `orders/registerOrder`,
    async (data, order) => {
        const res = await API.createOrder(data)
        return res
    }

)

export const buyOrders = createAsyncThunk(
    `orders/buyOrders`,
    async (id, order) => {
        const res = await API.getBuyOrders(id)
        
        return res.orders
    }
)

export const sellOrders = createAsyncThunk(
    `orders/sellOrders`,
    async (id, order) => {
        const res = await API.getSellOrders(id)
        return res.orders
    }
)

const initialState = {
    orders: []
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{

    },
    extraReducers: {
        [buyOrders.fulfilled]: (state, action) => {
            
            state.orders = [...action.payload]
        },
        [sellOrders.fulfilled]: (state, action) => {
            state.orders = [...action.payload]
        }
    }
})

export const ordersSelector = (state) => state.orders;

export default ordersSlice.reducer;