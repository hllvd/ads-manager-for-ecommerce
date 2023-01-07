import { createSlice } from "@reduxjs/toolkit";

const uiObj = {
    dashboard: {
        title: 'Dashboard',
        notificationCounter: 0
    }
}

/** 
 * Actions
 */
export const UiSlice = createSlice({
    name: "ui",
    initialState: { value: uiObj },
    reducers: {
        setTitle: (state, action) => {
            state.value.dashboard.title = action.payload
        },
        setNotificationCounter: (state, action) => {
            state.value.dashboard.notificationCounter = action.payload
        },

    }
})


/** 
 * Middleware
 */
export const middleWare = (store) => {
    return function (next) {
        return function (action) {
            next(action)
        }
    }
}



export const { setTitle, setNotificationCounter } = UiSlice.actions
export default UiSlice.reducer