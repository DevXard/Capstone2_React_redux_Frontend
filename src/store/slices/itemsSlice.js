import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../api';

export const getAllItems = createAsyncThunk(
    `item/getAllItems`,
    async (thunkAPI) => {
        const res = await API.getItems()
        return res.data
    }
)

export const addItem = createAsyncThunk(
    `item/addItem`,
    async (data, thunkAPI) => {
        const res = await API.addItem(data)
        
        return res
    }
)

export const getItem = createAsyncThunk(
    'item/getItem',
    async (id, thunkAPI) => {
        const res = await API.getItemById(id)
        return res
    }
)

export const getItemAddress = createAsyncThunk(
    `item/getItemAddress`,
    async (id, thunkAPI) => {
        const res = await API.getItemAddress(id)
        return res.addresses
    }
)

const initialState = {
    loading: false,
    items: [],
    item: {},
    itemAddress: {}
}

const itemsSlice = createSlice({
    name: 'item',
    initialState,
    reducers:{

    },
    extraReducers: {
        [getAllItems.fulfilled]: (state, action) => {
            state.items = [...action.payload]
        },
        [getItem.fulfilled]: (state, action) => {
            state.item = {...action.payload.item};
        },
        [getItemAddress.fulfilled]: (state, action) => {
            state.itemAddress = {...action.payload}
        }
        
    }
})

export const itemsSelector = state => state.items

export default itemsSlice.reducer;