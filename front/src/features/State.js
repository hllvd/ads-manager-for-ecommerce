import { createSlice } from "@reduxjs/toolkit";

const stateObj = {
    ui: {
        dashboard: {
            title: 'Dashboard',
            notificationCounter: 0
        }
    }
}

/** 
 * Actions
 */
export const StateSlice = createSlice({
    name: "state",
    initialState: { value: stateObj },
    reducers: {
        setTitle: (state, action) => {
            state.value.ui.dashboard.title = action.payload
        },
        setNotificationCounter: (state, action) => {
            state.value.ui.dashboard.notificationCounter = action.payload
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
export const { setTitle, setNotificationCounter } = StateSlice.actions
export default StateSlice.reducer