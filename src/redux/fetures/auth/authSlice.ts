import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export type TUser = {
    userId: string;
    role: string
    iat: number
    exp: number
}

type TAuthUser = {
    user: null | TUser
    token: null | string
}

const initialState: TAuthUser = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload
            state.user = user;
            state.token = token
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        }
    }
})


export const { logOut, setUser } = authSlice.actions

export const useCurrentToken = (state: RootState) => state.auth.token
export const selectCurrentUser = (state: RootState) => state.auth.user