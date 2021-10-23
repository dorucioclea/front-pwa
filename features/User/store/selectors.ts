import { AppState } from '../../store'

export const selectUserLoggedIn = (state: AppState) => state.user.loggedIn
export const selectUser = (state: AppState) => state.user.data
