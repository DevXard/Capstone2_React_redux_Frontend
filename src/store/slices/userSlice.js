import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
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

/*
    Accepts {Username, Password}

    Returns {token}

    Set API.token to {token}

    Stores token in redux
*/

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (data, thunkAPI) => {
        try {
            const res = await API.loginUser(data)
            API.setToken(res.data.token)
            let {username} = jwt_decode(res.data.token)
            const userRes = await API.getCurrentUser(username) 
            
            return {token: res.data.token, user: userRes}
            
        } catch (err) {
            return console.error(err)
        }
    }
)

/*
    Accepts: data = userID

    Clears API class token

    Returns {msg}
*/
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

/* Refresh Token */

export const refreshToken = createAsyncThunk(
    'user/refreshToken',
    async (thunkAPI) => {
        
        try{
            const res = await API.renewToken()
            API.setToken(res.token)
            let {username} = jwt_decode(res.token)
            const userRes = await API.getCurrentUser(username) 
            
            return {token: res.token, user: userRes, logedIn: res.logedIn}
            // return res
        }catch (err) {
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
            state.token = action.payload.token;
            state.isLoading = false;
            state.userData = action.payload.user;
        },

        [logOutUser.fulfilled]: (state, action) => {
            state.isLogedIn = false
            state.token = ''
        },

        [refreshToken.fulfilled]: (state, action) => {
            state.isLogedIn = action.payload.logedIn;
            state.token = action.payload.token;
            state.userData = action.payload.user;
    
        }
    }
})

export const userSelector = (state) => state.user;

export default userSlice.reducer;