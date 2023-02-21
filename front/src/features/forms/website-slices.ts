import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface WebsiteInterfaceState {
    website: {
        id?: number,
        name: string,
        description?: string,
        url?: string,
        clientId?: string,
        clientSecret?: string

    }

}

const initialState: WebsiteInterfaceState = {
    website: {
        name: "Beleza mista",
        description: "",
        url: "https://belezamista.com.br",
        clientId: "clientIDDDDD",
        clientSecret: "SCREEE"

    }
}

const FormSlice = createSlice({
    name: 'website-form',
    initialState,
    reducers: {
        setForm: (state, action) => {
            state.website = action.payload
        }
    }
})




export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints(builder) {
        return {
            fetchWebsite: builder.query<WebsiteInterfaceState[], object | void>({
                query() {
                    return `/business/0/website`;
                },
            }),
        };
    },
});

export const { useFetchWebsiteQuery } = apiSlice;

export const { setForm } = FormSlice.actions;
export default FormSlice.reducer;