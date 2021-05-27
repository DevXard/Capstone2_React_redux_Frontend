import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from '../../api'; 


export const signupUser = createAsyncThunk(
    'user/signupUser',
    async (data, thunkAPI) => {
        try {
            const res = await API.registerUser(data)
            API.setToken(res)
            return res
        } catch (err) {
            return console.error(err)
        }
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (data, thunkAPI) => {
        try {
            console.log("hi")
            const res = await API.loginUser(data)
            API.setToken(res.data.token)
            console.log(res.data)
            return res.data.token
        } catch (err) {
            return console.error(err)
        }
    }
)

const initialState = {
    userData: {},
    token: '',
    isLoading: false,
    isSuccess: false,
    isError: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: {
        [signupUser.fulfilled]: (state, payload) => {
            state.isSuccess = true;
            state.token = payload;
            state.isLoading = false;
        },
        [signupUser.pending]: (state) => {
            state.isLoading = true;
        },
        [signupUser.rejected]: (state) => {
            state.isError = true;
        },
        [loginUser.fulfilled]: (state, payload) => {
            state.isSuccess = true;
            state.token = payload;
            state.isLoading = false;
        }
    }
})

export const userSelector = (state) => state.user;

export default userSlice.reducer;