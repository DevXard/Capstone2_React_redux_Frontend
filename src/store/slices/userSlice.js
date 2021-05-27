import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../api'; 


export const signupUser = createAsyncThunk(
    'user/signupUser',
    async (data, thunkAPI) => {
        try {
            const res = await API.registerUser(data)
            API.setToken(res.data.token)
            return res.data.token
        } catch (err) {
            return console.error(err)
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (data, thunkAPI) => {
        try {
            const res = await API.loginUser(data)
            API.setToken(res.data.token)
        
            return res.data.token
        } catch (err) {
            return console.error(err)
        }
    }
)

export const logOutUser = createAsyncThunk(
    'user/logOutUser',
    async (data, thunkAPI) => {
        try {
            const res = await API.logOutUser(data)
            
            API.setToken('')
            return res.data
        } catch (err) {
            return console.error(err)
        }
    }
)

const initialState = {
    userData: {},
    token: '',
    isLoading: false,
    isLogedIn: false,
    isError: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: {
        [signupUser.fulfilled]: (state, action) => {
            state.isLogedIn = true;
            state.token = action.payload;
            state.isLoading = false;
        },
        [signupUser.pending]: (state) => {
            state.isLoading = true;
        },
        [signupUser.rejected]: (state) => {
            state.isError = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLogedIn = true;
            state.token = action.payload;
            state.isLoading = false;
        },
        [logOutUser.fulfilled]: (state, action) => {
            state.isLogedIn = false
        }
    }
})

export const userSelector = (state) => state.user;

export default userSlice.reducer;