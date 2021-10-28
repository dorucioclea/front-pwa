import type { AppState, AppThunk } from '../../store'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserPrivate } from '../types'

export type UserState = {
    loggedIn: boolean
    data: UserPrivate | null
}

const initialState: UserState = {
  loggedIn: false,
  data: null,
}

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserPrivate>) => {
      state.loggedIn = true
      state.data = action.payload
    },
    logout: state => {
      state.loggedIn = false
      state.data = null
    },
    setAuthenticatedUser: (state, action: PayloadAction<UserPrivate>) => {
      state.data = action.payload
    },
  },
})

export const { login, logout, setAuthenticatedUser } = slice.actions

export const userReducer = slice.reducer
