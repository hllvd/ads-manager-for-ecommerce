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
export const middleWare1 = (store) => {
    return function (next) {
        return function (action) {
            console.log("api", action, store.getState())
            next(action)
        }
    }
}



export const middleware = getDefaultMiddleware => getDefaultMiddleware().concat(middleWare1)
export const { setTitle, setNotificationCounter } = UiSlice.actions
export default UiSlice.reducer