import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../api';

export const getAllItems = createAsyncThunk(
    `item/getAllItems`,
    async (thunkAPI) => {
        const res = await API.getItems()
        return res.data
    }
)

const initialState = {
    loading: false,
    items: []
}

const itemsSlice = createSlice({
    name: 'item',
    initialState,
    reducers:{
        
    },
    extraReducers: {
        [getAllItems.fulfilled]: (state, action) => {
            state.items = [...action.payload]
        }
    }
})

export const itemsSelector = state => state.items

export default itemsSlice.reducer;