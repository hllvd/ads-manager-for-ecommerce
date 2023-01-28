import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/ui-slice'





export const store = configureStore({
    reducer: {
        ui: uiReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;