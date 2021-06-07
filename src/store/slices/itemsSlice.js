import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../api';

/* Retreaves all items from backend */
export const getAllItems = createAsyncThunk(
    `item/getAllItems`,
    async (thunkAPI) => {
        const res = await API.getItems()
        return res.data
    }
)

/* Adds item to database */
export const addItem = createAsyncThunk(
    `item/addItem`,
    async (data, thunkAPI) => {
        const res = await API.addItem(data)
        
        return res
    }
)
/* Gets item by ID */
export const getItem = createAsyncThunk(
    'item/getItem',
    async (id, thunkAPI) => {
        const res = await API.getItemById(id)
        return res
    }
)

/* GET address of the owner of the item */
export const getItemAddress = createAsyncThunk(
    `item/getItemAddress`,
    async (id, thunkAPI) => {
        const res = await API.getItemAddress(id)
        return res.addresses
    }
)

export const getItemByName = createAsyncThunk(
    `item/getItemByName`,
    async (name, thunkAPI) => {
        const res = await API.getItemByName(name)
        return res.item
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
        },
        [getItemByName.fulfilled]: (state, action) => {
            state.items = [...action.payload]
        }
        
    }
})

export const itemsSelector = state => state.items

export default itemsSlice.reducer;