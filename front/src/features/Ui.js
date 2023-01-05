import { createSlice } from "@reduxjs/toolkit";

const uiObj = {
    dashboard: {
        title: 'Dashboard'
    }
}

export const UiSlice = createSlice({
    name: "ui",
    initialState: { value: uiObj },
    reducers: {
        setTitle: (state, action) => {
            state.value.dashboard.title = action.payload
        }
    }
})

export const { setTitle } = UiSlice.actions
export default UiSlice.reducer