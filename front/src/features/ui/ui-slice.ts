import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface UserInterfaceState {
    dashboard: {
        title: string | undefined
        notificationCounter: number | undefined
    };
}

const initialState: UserInterfaceState = {
    dashboard: {
        title: 'Dashboard',
        notificationCounter: 0
    }
}

const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            //state.dashboard.title = action.payload
        },
        setNotificationCounter: (state, action: PayloadAction<number>) => {
            //state.dashboard.notificationCounter = action.payload
        },
    }
})

export const { setTitle, setNotificationCounter } = UISlice.actions;
export default UISlice.reducer;