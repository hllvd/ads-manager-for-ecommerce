import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/ui-slice'
import formsReducer from '../features/forms/website-slices'
import { apiSlice } from '../features/forms/website-slices';




export const store = configureStore({
    reducer: {
        ui: uiReducer,
        forms: formsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;