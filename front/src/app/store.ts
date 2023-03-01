import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/ui-slice'
import formsReducer from '../features/forms/website-slices'
import { apiSlice } from '../features/forms/website-slices';
import { productsSlice } from '../features/api/products-slice';




export const store = configureStore({
    reducer: {
        ui: uiReducer,
        forms: formsReducer,
        [productsSlice.reducerPath]: productsSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware).concat(productsSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;