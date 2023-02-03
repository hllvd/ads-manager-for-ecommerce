import { createSlice, PayloadAction } from "@reduxjs/toolkit";


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

export const { setForm } = FormSlice.actions;
export default FormSlice.reducer;