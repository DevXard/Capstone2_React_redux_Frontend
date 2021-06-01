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
        console.log(res)
        return res
    }
)

const initialState = {
    loading: false,
    items: [],
    item: {}
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
        }
        
    }
})

export const itemsSelector = state => state.items

export default itemsSlice.reducer;