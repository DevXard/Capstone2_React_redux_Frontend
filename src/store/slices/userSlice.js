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
            if(res.message){
                return res
            }
            
            API.setToken(res.data.token)
            let {username} = jwt_decode(res.data.token)
            const userRes = await API.getCurrentUser(username) 
            
            return {token: res.data.token, user: userRes, logedIn: res.data.logedIn}
            
        } catch (err) {
            return err
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
            
            if(!res.logedIn) {
                console.log(res)
                return res
            }
            
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
    errMsg: ''
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
            state.isError = false;
        },
        [signupUser.pending]: (state) => {
            state.isLoading = true;
        },
        [signupUser.rejected]: (state) => {
            state.isError = true;
        },

        [loginUser.fulfilled]: (state, action) => {
            
            if(action.payload.message){
                console.log(action.payload)
                state.isError = true;
                state.errMsg = action.payload.message;
            }else{
                console.log(action.payload.logedIn)
                state.isLoading = action.payload.logedIn;
                state.token = action.payload.token;
                state.userData = action.payload.user;
                state.isError = false;
            }
            
        },
        [loginUser.pending]: (state) => {
            state.isLogedIn = false;
            state.isLoading = true;
            
        },
        [loginUser.rejected]: (state) => {
            state.isLogedIn = false;
            state.isLoading = false;
            state.isError = true;
        },

        [logOutUser.fulfilled]: (state) => {
            state.isLogedIn = false
            state.token = ''
            state.isError = false;
        },

        [refreshToken.fulfilled]: (state, action) => {
            if(!action.payload.isLogedIn){
                state.isLogedIn = action.payload.logedIn;
                state.token = action.payload.token;
                state.isLoading = false;
            }else{
                state.isLogedIn = action.payload.logedIn;
                state.token = action.payload.token;
                state.userData = action.payload.user;
                state.isError = false;
                state.isLoading = false;
            }
            
    
        },
        [refreshToken.pending]: (state, action) => {
            state.isLogedIn = false;
            state.isLoading = true;
            state.isError = false;
    
        },
        [refreshToken.rejected]: (state) => {
            state.isLogedIn = false;
            state.token = '';
            
    
        }
    }
})

export const userSelector = (state) => state.user;

export default userSlice.reducer;