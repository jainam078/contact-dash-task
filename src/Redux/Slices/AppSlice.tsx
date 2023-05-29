import { createSlice } from '@reduxjs/toolkit'

interface appStateIProps {
    isCollapse: boolean
}

const initialState = { 
    isCollapse: false, 
} as appStateIProps

const appSlice = createSlice({
    name: 'APP_SLICE',
    initialState,
    reducers: {
        handleCollapse(state, action) {
            state.isCollapse = action.payload
        }
    },
})

export const { handleCollapse} = appSlice.actions
export default appSlice.reducer