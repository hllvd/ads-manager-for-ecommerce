import { createSlice } from "@reduxjs/toolkit";


const stateObj = {
    ui: {
        dashboard: {
            title: 'Dashboard',
            notificationCounter: 0
        }
    },
    pages: {
        settings: {
            website: {
                form: {
                    name: "Beleza mista",
                    description: "",
                    url: "https://belezamista.com.br",
                    clientId: "clientIDDDDD",
                    clientSecret: "SCREEE"
                }
            }
        }
    }
}

/*
*
    id: Number,
    name: String,
    description: String,
    url : String,
    clientId : String,
    clientSecret: String,
    websiteType: WebSiteType
*/


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
        settingsWebsiteFormHandler: (state, action) => {
            if (!!action.payload.submit) return
            state.value.pages.settings.website.form[action.payload.key] = action.payload.value
        }

    }
})


/** 
 * Middleware
 */
export const formMiddleware = (store) => {
    return function (next) {
        return function (action) {
            if (action.type.includes("FormHandle") && !!action.payload.submit) console.log('df')
            next(action)
        }
    }
}



export const middleware = getDefaultMiddleware => getDefaultMiddleware().concat(formMiddleware)
export const { setTitle, setNotificationCounter, settingsWebsiteFormHandler } = StateSlice.actions
export default StateSlice.reducer